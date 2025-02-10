"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Demo = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline">State: {open ? "Open" : "Close"}</Button>
                </PopoverTrigger>
                <PopoverContent side="top">Place content for the popover.</PopoverContent>
            </Popover>
            <p className="text-default-600 mt-1 text-sm">
                State: {open ? "Open" : "Close"}
                <span className="text-primary ms-1 cursor-pointer hover:underline" onClick={() => setOpen(false)}>
                    (Close from here)
                </span>
            </p>
        </div>
    );
};
