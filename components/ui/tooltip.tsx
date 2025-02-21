import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "@/lib/utils";

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content>;

export const TooltipContent = ({ className, sideOffset = 4, ...props }: TooltipContentProps) => (
    <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
            "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded border px-3 py-1.5 text-sm shadow-md",
            className,
        )}
        {...props}
    />
);
