# Docker инструкции для Next.js проекта

Этот проект настроен для запуска в Docker контейнерах с поддержкой как продакшена, так и разработки.

## Структура файлов

- `Dockerfile` - основной Dockerfile для продакшена
- `Dockerfile.dev` - Dockerfile для разработки
- `docker-compose.yml` - конфигурация для продакшена
- `docker-compose.dev.yml` - конфигурация для разработки
- `nginx.conf` - конфигурация nginx для продакшена
- `.dockerignore` - файлы, исключаемые из Docker контекста

## Запуск в продакшене

### Сборка и запуск
```bash
# Сборка и запуск с помощью docker-compose
docker-compose up --build

# Или только сборка
docker-compose build

# Запуск в фоновом режиме
docker-compose up -d
```

### Прямая сборка Docker образа
```bash
# Сборка образа
docker build -t vaki-app .

# Запуск контейнера
docker run -p 3000:3000 vaki-app
```

## Запуск в режиме разработки

### С hot reload
```bash
# Запуск в режиме разработки
docker-compose -f docker-compose.dev.yml up --build

# Запуск в фоновом режиме
docker-compose -f docker-compose.dev.yml up -d
```

## Полезные команды

### Просмотр логов
```bash
# Логи продакшена
docker-compose logs -f app

# Логи разработки
docker-compose -f docker-compose.dev.yml logs -f app-dev
```

### Остановка контейнеров
```bash
# Остановка продакшена
docker-compose down

# Остановка разработки
docker-compose -f docker-compose.dev.yml down
```

### Очистка
```bash
# Удаление контейнеров и образов
docker-compose down --rmi all --volumes --remove-orphans

# Очистка всех неиспользуемых ресурсов Docker
docker system prune -a
```

## Особенности конфигурации

### Продакшен
- Использует многоэтапную сборку для минимизации размера образа
- Статические файлы обслуживаются через nginx
- Включено gzip сжатие и кэширование
- Настроены заголовки безопасности
- Оптимизирован для производительности

### Разработка
- Hot reload для быстрой разработки
- Монтирование исходного кода в контейнер
- Использование pnpm для управления зависимостями
- Turbopack для быстрой сборки

## Переменные окружения

### Продакшен
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

### Разработка
- `NODE_ENV=development`
- `NEXT_TELEMETRY_DISABLED=1`

## Порт

Приложение доступно на порту `3000` в обоих режимах.

## Health Check

В продакшене настроен health check, который проверяет доступность приложения каждые 30 секунд.

## Безопасность

- Приложение запускается от непривилегированного пользователя
- Настроены заголовки безопасности в nginx
- Используется Alpine Linux для минимальной поверхности атаки
