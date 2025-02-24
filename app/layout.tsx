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
    title: { template: "%s | PaceUI", default: "PaceUI – Tailwind CSS Components & Variants, Ready to Copy-Paste into Your React & Next.js Apps" },
    description:
        "A Tailwind CSS components and variants library, built for React & Next.js. Copy, paste, and ship faster with clean, customizable UI elements",
    keywords: ["tailwind", "next.js", "react", "ui components", "web design", "copy-paste components", "radix ui"],
    icons: {
        icon: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ]
    },
    openGraph: {
        title: "PaceUI - Tailwind CSS Components & Variants for React & Next.js",
        description: "A Tailwind CSS components and variants library, built for React & Next.js. Copy, paste, and ship faster with clean, customizable UI elements",
        url: "https://paceui.com",
        siteName: "PaceUI",
    },
    twitter: {
        card: "summary_large_image",
        title: "PaceUI - Tailwind CSS Components & Variants for React & Next.js",
        description: "A Tailwind CSS components and variants library, built for React & Next.js. Copy, paste, and ship faster with clean, customizable UI elements",
    },
    alternates:{
      canonical: "https://paceui.com",
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
