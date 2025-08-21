export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VAKI | Furniture Factory",
  description: "Make beautiful websites regardless of your design experience.",

  footerItems: [
    {
      label: "О нас",
      href: "/#about",
    },
    {
      label: "Услуги",
      href: "/#services",
    },
    {
      label: "Работы",
      href: "/#works",
    },
    {
      label: "Отзывы",
      href: "/#testimonials",
    },
    {
      label: "Контакты",
      href: "/#contacts",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  contact: {
    phone: "+1 (123) 456-7890",
    phoneFormatted: "+11234567890",

    whatsapp: "https://wa.me/11234567890",
    whatsappFormatted: "https://wa.me/11234567890",
    
    telegram: "https://t.me/username",
    telegramFormatted: "t.me/username",

    address: "123 Main St, City, State, 12345",
    addressFormatted: "123 Main St, City, State, 12345",
    addressLink: "https://www.google.com/maps?q=123+Main+St,+City,+State,+12345", 
    email: "test@gmail.com",
  },

};
