import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

export type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>;

export const Separator = ({ className, orientation = "horizontal", decorative = true, ...props }: SeparatorProps) => (
    <SeparatorPrimitive.Root
        decorative={decorative}
        orientation={orientation}
        className={cn(
            "bg-default-200 shrink-0",
            orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
            className,
        )}
        {...props}
    />
);
