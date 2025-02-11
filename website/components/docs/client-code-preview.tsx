"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ClientCodePreview = ({ html, collapsible = false }: { html: string; collapsible?: boolean }) => {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <div
                className={cn("text-sm [&>.shiki]:max-h-32 [&>.shiki]:overflow-scroll [&>.shiki]:p-3", {
                    "[&>.shiki]:max-h-[700px]": expand || !collapsible,
                    "[&>.shiki]:pb-12": collapsible,
                })}
                dangerouslySetInnerHTML={{ __html: html }}></div>

            {collapsible && (
                <div
                    className={cn("absolute start-0 end-0 bottom-0 flex h-32 items-center justify-center", {
                        "bottom-8 h-fit": expand,
                        "bg-gradient-to-t from-black/80 to-transparent": !expand,
                    })}>
                    <Button
                        size={expand ? "sm" : "md"}
                        className="bg-white text-black"
                        aria-label="Expand/Collapse"
                        onClick={() => setExpand((e) => !e)}>
                        {expand ? "Collapse" : "Expand"}
                    </Button>
                </div>
            )}
        </>
    );
};
