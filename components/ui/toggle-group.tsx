"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";
import { VariantProps } from "tailwind-variants";

import { toggleTheme } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleTheme>>(toggleTheme.defaultVariants);

export type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleTheme>;

export const ToggleGroup = ({ className, variant, size, color, children, ...props }: ToggleGroupProps) => (
    <ToggleGroupPrimitive.Root className={cn("flex items-center justify-center gap-1", className)} {...props}>
        <ToggleGroupContext.Provider value={{ variant, size, color }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
);

export type ToggleGroupItemProps = Omit<React.ComponentProps<typeof ToggleGroupPrimitive.Item>, "color"> &
    VariantProps<typeof toggleTheme>;

export const ToggleGroupItem = ({ className, children, variant, size, color, ...props }: ToggleGroupItemProps) => {
    const context = React.use(ToggleGroupContext);

    return (
        <ToggleGroupPrimitive.Item
            className={toggleTheme({
                variant: variant || context.variant,
                size: size || context.size,
                color: color || context.color,
                className,
            })}
            {...props}>
            {children}
        </ToggleGroupPrimitive.Item>
    );
};
