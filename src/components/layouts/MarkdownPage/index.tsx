'use client';

import { useEffect, useState } from "react";
import { loadMarkdown } from "@features/loadMarkdown";
import ReactMarkdown from "react-markdown";
import s from './style.module.scss';
import clsx from "clsx";

interface MarkdownPageProps {
  fileName: string;
}

export default function MarkdownPage({ fileName }: MarkdownPageProps) {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    loadMarkdown(fileName)
      .then(text => setContent(text))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [fileName]);

  return (
    <div className={clsx(s.markdownPageGenerator, "p-4 max-w-4xl mx-auto")}>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}
