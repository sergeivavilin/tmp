"use client";

import type { ThemeProviderProps } from "next-themes";

import { createTheme, MantineProvider, rem } from '@mantine/core';

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const theme = createTheme({
  headings: {
    fontFamily: "Lato, sans-serif",
    
    sizes: {
      h2: {fontSize: '2.25rem'},
    }
  }
})

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
