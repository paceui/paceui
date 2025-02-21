"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Demo = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <TooltipProvider>
                <Tooltip open={open} onOpenChange={setOpen}>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <p className="text-default-600 mt-1 text-sm">
                State: {open ? "Open" : "Close"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setOpen(true)}>
                    (Open)
                </span>
            </p>
        </div>
    );
};
