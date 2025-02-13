"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/website/utils/docs";

export const ClipboardButton = ({ text }: { text: string }) => {
    const [hasCopied, setHasCopied] = useState(false);

    const copy = () => {
        setHasCopied(true);
        copyToClipboard(text).then();
        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    };

    return (
        <Button
            variant="ghost"
            color="secondary"
            className="relative rounded-lg text-white hover:bg-white/25"
            size="sm"
            aria-label="Copy"
            onClick={copy}
            onlyIcon>
            <CheckIcon
                className={cn("absolute inset-1.5 size-4 transition-all", {
                    "scale-0 opacity-0": !hasCopied,
                })}
            />
            <ClipboardIcon
                className={cn("absolute inset-1.5 size-4 transition-all", {
                    "scale-0 opacity-0": hasCopied,
                })}
            />
        </Button>
    );
};
