import React from "react";

import { Sidebar } from "@/website/components/layouts/sidebar";
import { Topbar } from "@/website/components/layouts/topbar";

import { docsSidebarNavSections } from "./menu";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            <Topbar />
            <div className="flex">
                <div className="sticky top-16 hidden max-h-[calc(100vh-70px)] w-60 min-w-60 md:block">
                    <Sidebar sections={docsSidebarNavSections} />
                </div>
                <div className="mt-4 min-w-0 grow">{children}</div>
            </div>
        </div>
    );
}
