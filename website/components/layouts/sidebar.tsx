"use client";

import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type SidebarNavItem = {
    title: string;
    link?: string;
};

export type SidebarNavSection = {
    icon?: ReactNode;
    title: string;
    items: SidebarNavItem[];
    expanded?: boolean;
    comingSoon?: boolean;
};

type SidebarProps = {
    sections: SidebarNavSection[];
    className?: ClassNameValue;
};

export const Sidebar = ({ sections, className }: SidebarProps) => {
    const pathname = usePathname();
    const allSections = sections
        .filter((section) => {
            if (!section.expanded) {
                return section.items.find((item) => item.link == pathname);
            }
            return section.expanded;
        })
        .map((s) => s.title);

    return (
        <ScrollArea className={cn("relative h-full", className)}>
            <Accordion type="multiple" defaultValue={allSections} className="group/arrow space-y-1.5 pt-1 pb-6">
                {sections.map((section, key) => (
                    <SidebarNavSection key={key} section={section} pathname={pathname} />
                ))}
            </Accordion>
            <div className="from-background absolute top-0 h-5 w-full bg-gradient-to-b to-transparent"></div>
            <div className="from-background absolute bottom-0 h-5 w-full bg-gradient-to-t to-transparent"></div>
        </ScrollArea>
    );
};

const SidebarNavSection = ({ section, pathname }: { section: SidebarNavSection; pathname: string }) => {
    return (
        <AccordionItem
            value={section.title}
            className={cn("border-0", {
                "opacity-70": section.comingSoon,
            })}>
            <AccordionTrigger className="py-2 pe-2 hover:no-underline [&>svg]:opacity-0 [&>svg]:transition-all group-hover/arrow:[&>svg]:opacity-100">
                <div className="flex items-center gap-1.5">
                    {section.icon && <Slot className="text-default-600 size-4">{section.icon}</Slot>}
                    {section.title}
                </div>
            </AccordionTrigger>
            <AccordionContent
                className={cn("mx-3 pb-0", {
                    "pointer-events-none": section.comingSoon,
                })}>
                {section.items.map((item, key) => (
                    <SidebarNavItem item={item} key={key} pathname={pathname} />
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

const SidebarNavItem = ({ item, pathname }: { item: SidebarNavItem; pathname: string }) => {
    return (
        <>
            <Link
                className={cn("text-default-700 hover:bg-default-100 mb-0.5 block rounded px-2.5 py-1 text-[15px]", {
                    "!bg-primary/10 text-primary": pathname == item.link,
                })}
                href={item.link ?? "#"}>
                {item.title}
            </Link>
        </>
    );
};
