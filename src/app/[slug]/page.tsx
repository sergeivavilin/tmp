import { PageProps } from '@/.next/types/app/[slug]/page';
import MarkdownPage from '@components/layouts/MarkdownPage';

// import MarkdownPage from "@/src/components/MarkdownPage";
import { notFound } from "next/navigation";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

const VALID_MARKDOWNS: Record<string, string> = {
  policity: "policity.md",
  // можно сюда добавить другие страницы
};

export default async function Page({ params } : PageProps ) {
  const { slug } = await params;
  const fileName = VALID_MARKDOWNS[slug as string];

  if (!fileName) {
    notFound();
  }

  return <MarkdownPage fileName={fileName} />;
}

// для статической генерации (если хочешь использовать SSG)
export async function generateStaticParams() {
  return Object.keys(VALID_MARKDOWNS).map((slug) => ({ slug }));
}
