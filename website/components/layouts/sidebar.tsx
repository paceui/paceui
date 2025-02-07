import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { ReactNode } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type SidebarNavItem = {
    title: string;
    link: string;
};

export type SidebarNavSection = {
    icon?: ReactNode;
    title: string;
    items: SidebarNavItem[];
};

type SidebarProps = {
    sections: SidebarNavSection[];
};

export const Sidebar = ({ sections }: SidebarProps) => {
    return (
        <div className="relative h-full">
            <Accordion type="multiple" className="space-y-1.5 pt-1 pb-6">
                {sections.map((section, key) => (
                    <SidebarNavSection key={key} section={section} />
                ))}
            </Accordion>
        </div>
    );
};

const SidebarNavSection = ({ section }: { section: SidebarNavSection }) => {
    return (
        <AccordionItem value={section.title} className={cn("border-0")}>
            <AccordionTrigger className="py-2 pe-2 hover:no-underline">
                <div className="flex items-center gap-1.5">
                    {section.icon && <Slot className="size-4">{section.icon}</Slot>}
                    {section.title}
                </div>
            </AccordionTrigger>
            <AccordionContent className={cn("mx-3 pb-0")}>
                {section.items.map((item, key) => (
                    <SidebarNavItem item={item} key={key} />
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

const SidebarNavItem = ({ item }: { item: SidebarNavItem }) => {
    return (
        <>
            <Link className={cn("mb-0.5 block rounded px-2.5 py-1 text-[15px]")} href={item.link}>
                {item.title}
            </Link>
        </>
    );
};
