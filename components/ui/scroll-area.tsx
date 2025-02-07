import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { cn } from "@/lib/utils";

export type ScrollAreaProps = React.ComponentProps<typeof ScrollAreaPrimitive.Root>;

export const ScrollArea = ({ className, children, ...props }: ScrollAreaProps) => (
    <ScrollAreaPrimitive.Root className={cn("relative overflow-hidden", className)} {...props}>
        <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
);

export type ScrollBarProps = React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>;

export const ScrollBar = ({ className, orientation = "vertical", ...props }: ScrollBarProps) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
        orientation={orientation}
        className={cn(
            "flex touch-none transition-colors select-none",
            {
                "h-full w-2.5 border-l border-l-transparent p-px": orientation === "vertical",
                "h-2.5 flex-col border-t border-t-transparent p-px": orientation === "horizontal",
            },
            className,
        )}
        {...props}>
        <ScrollAreaPrimitive.ScrollAreaThumb className="bg-default-200 hover:bg-default-300 relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
);
