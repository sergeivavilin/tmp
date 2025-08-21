import "@styles/globals.scss";

import { Metadata, Viewport } from "next";
// import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { siteConfig } from "@config/site";
import { fontSans } from "@config/fonts";
import Navbar from "@widgets/Navbar";


import clsx from "clsx";

import { Providers } from "./providers";
import { CarouselCard } from "../components/widgets/CardCarousel";
import { Raleway } from 'next/font/google'
import { FooterWithLogo } from "../components/widgets/Footer";

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
      <ColorSchemeScript />
      </head>
      <body
        className={clsx(
          "min-h-screen  font-sans antialiased",
          fontSans.variable,
        )}
      >

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          {children}
          <FooterWithLogo />
        </Providers>
      </body>
    </html>
  );
}
