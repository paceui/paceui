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
    icon?: ReactNode;
    title: string;
    items?: SidebarNavItem[];
    expanded?: boolean;
    comingSoon?: boolean;
    link?: string;
};

type SidebarProps = {
    items: SidebarNavItem[];
    className?: ClassNameValue;
};

export const Sidebar = ({ items, className }: SidebarProps) => {
    const pathname = usePathname();
    const allItems = items
        .filter((item) => {
            if (!item.expanded) {
                return item.items?.find((item) => item.link == pathname);
            }
            return item.expanded;
        })
        .map((s) => s.title);

    return (
        <ScrollArea className={cn("relative h-full", className)}>
            <Accordion type="multiple" defaultValue={allItems} className="group/arrow space-y-1.5 pt-1 pb-6">
                {items.map((item, key) => (
                    <SidebarNavItem key={key} item={item} pathname={pathname} />
                ))}
            </Accordion>
            <div className="from-background absolute top-0 h-5 w-full bg-gradient-to-b to-transparent"></div>
            <div className="from-background absolute bottom-0 h-5 w-full bg-gradient-to-t to-transparent"></div>
        </ScrollArea>
    );
};

const SidebarNavItem = ({ item, pathname }: { item: SidebarNavItem; pathname: string }) => {
    return item.items ? (
        <AccordionItem
            value={item.title}
            className={cn("border-0", {
                "opacity-70": item.comingSoon,
            })}>
            <AccordionTrigger className="py-2 pe-2 hover:no-underline [&>svg]:opacity-0 [&>svg]:transition-all group-hover/arrow:[&>svg]:opacity-100">
                <div className="flex items-center gap-1.5">
                    {item.icon && <Slot className="text-default-600 size-4">{item.icon}</Slot>}
                    {item.title}
                </div>
            </AccordionTrigger>
            <AccordionContent
                className={cn("mx-3 pb-0", {
                    "pointer-events-none": item.comingSoon,
                })}>
                {item.items.map((item, key) => (
                    <SidebarNavItem item={item} key={key} pathname={pathname} />
                ))}
            </AccordionContent>
        </AccordionItem>
    ) : (
        <Link
            className={cn(
                "text-default-700 hover:bg-default-100 mb-0.5 flex items-center gap-2 rounded px-2.5 py-2 text-[15px]/none",
                {
                    "!bg-primary/10 !text-primary": pathname == item.link,
                },
            )}
            href={item.link ?? "#"}>
            {item.icon && <Slot className="size-4">{item.icon}</Slot>}
            {item.title}
        </Link>
    );
};
