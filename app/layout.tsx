import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Fira_Code, Work_Sans } from "next/font/google";
import React from "react";

import { cn } from "@/lib/utils";
import { ConfigProvider } from "@/website/contexts/config";
import "@/website/styles/app.css";

export const metadata: Metadata = {
    title: { template: "%s | PaceUI", default: "PaceUI" },
    description: "Tired of the same design across every website? PaceUI is here to change that",
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
                <NextThemesProvider attribute="class" defaultTheme="light">
                    <ConfigProvider>{children}</ConfigProvider>
                </NextThemesProvider>
            </body>
        </html>
    );
}
