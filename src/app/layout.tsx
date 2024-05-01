import type { Metadata } from "next";
import { Barlow } from "next/font/google";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./globals.css";
import Header from "@/components/header";
import Head from "next/head";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Net Shop",
  description:
    "Net Shop is a simple e-commerce website built with Next.js, Tailwind CSS, and NextUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${barlow.className} bg-[var(--light)] dark:bg-[var(--dark)]`}>
          <NextUIProvider>
            <NextThemesProvider attribute="className" defaultTheme="dark">
              <Header />
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </body>
      </html>
    </>
  );
}
