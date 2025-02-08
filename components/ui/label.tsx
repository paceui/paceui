import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/lib/utils";

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

export const Label = ({ className, ...props }: LabelProps) => (
    <LabelPrimitive.Root
        className={cn(
            "cursor-pointer text-sm leading-none peer-has-[:disabled]:cursor-not-allowed peer-has-[:disabled]:opacity-60",
            className,
        )}
        {...props}
    />
);
