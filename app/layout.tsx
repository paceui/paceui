import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Fira_Code, Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import React from "react";

import { cn } from "@/lib/utils";
import { ConfigProvider } from "@/website/contexts/config";
import "@/website/styles/app.css";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: { template: "%s | PaceUI", default: "PaceUI" },
    description:
        "Easily integrate, customizable, copy-pasteable Tailwind components and variants into your React and Next.js apps",
    keywords: ["tailwind", "next.js", "react", "ui components", "web design", "copy-paste components", "radix ui"],
    openGraph: {
        title: "PaceUI | Tailwind Components for React Ecosystem",
        description: "Integrate customizable Tailwind components into your React and Next.js apps seamlessly.",
        url: "https://paceui.com",
        siteName: "PaceUI",
    },
    twitter: {
        card: "summary_large_image",
        title: "PaceUI | Tailwind Components for React Ecosystem",
        description: "Integrate customizable Tailwind components into your React and Next.js apps seamlessly.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const sansFont = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const monoFont = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("font-sans", sansFont.variable, monoFont.variable)}>
                <NextTopLoader height={1} showSpinner color="var(--color-primary)" />
                <NextThemesProvider attribute="class" defaultTheme="light">
                    <ConfigProvider>{children}</ConfigProvider>
                    <Analytics />
                </NextThemesProvider>
            </body>
        </html>
    );
}
