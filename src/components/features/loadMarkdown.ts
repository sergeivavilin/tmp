export async function loadMarkdown(fileName:string): Promise<string> {
  const res = await fetch(`/markdown/${fileName}`);
  if (!res.ok) {
    throw new Error(`Ошибка загрузки файла: ${fileName}`);
  }
  return await res.text();
}
