"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TocEntry {
    title: string;
    url: string;
    items: TocEntry[];
}

interface Props {
    entries?: TocEntry[];
}

interface FlattenedTocEntry extends Omit<TocEntry, "items"> {
    depth: number;
}

const flattenTocEntries = (entries: TocEntry[] = [], depth = 0): FlattenedTocEntry[] =>
    entries.reduce<FlattenedTocEntry[]>(
        (acc, entry) =>
            acc.concat({ title: entry.title, url: entry.url, depth }, flattenTocEntries(entry.items, depth + 1)),
        [],
    );

const useActiveItem = (itemIds: string[]) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { root: document, rootMargin: "-50% 0px", threshold: 0 },
        );

        itemIds?.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);

    return activeId;
};

export const TableOfContent = (props: Props) => {
    const entries = flattenTocEntries(props.entries);
    const activeId = useActiveItem(entries.filter((e) => e.depth != 2).map((e) => e.url.split("#")[1]));

    return (
        <div>
            <p className="text-sm font-medium">On this page</p>
            <div className="text-default-600 mt-2 space-y-1 text-sm">
                {props.entries?.map((entry, index) =>
                    entry.items != null ? (
                        <TocSection section={entry} key={entry.title + index} activeId={activeId} />
                    ) : (
                        <TocItem item={entry} key={entry.title + index} activeId={activeId} />
                    ),
                )}
            </div>
        </div>
    );
};

const TocSection = ({ section, activeId }: { section: TocEntry; activeId: string }) => {
    return (
        <>
            <TocItem item={section} activeId={activeId} />
            <ul className="mx-4 space-y-1">
                {section.items?.map((item, index) => <TocItem key={index} item={item} activeId={activeId} />)}
            </ul>
        </>
    );
};

const TocItem = ({ item, activeId }: { item: TocEntry; activeId: string }) => {
    const activated = "#" + activeId == item.url;
    return (
        <Link
            href={item.url}
            key={item.url}
            className={cn("text-default-600 hover:text-default-700 block transition-all", {
                "text-default-900 font-medium": activated,
            })}>
            {item.title}
        </Link>
    );
};
