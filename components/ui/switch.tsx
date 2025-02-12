import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

const switchTheme = tv({
    slots: {
        base: [
            "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
            "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=unchecked]:bg-default-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        ],
        thumb: "block rounded-full ring-0 shadow-lg transition-transform",
    },
    variants: {
        variant: {
            solid: {
                thumb: "bg-background",
            },
            soft: {
                thumb: "bg-background",
            },
        },
        color: {
            default: {
                base: "data-[state=checked]:bg-default-600",
            },
            primary: {
                base: "data-[state=checked]:bg-primary",
            },
            secondary: {
                base: "data-[state=checked]:bg-secondary",
            },
            success: {
                base: "data-[state=checked]:bg-success",
            },
            error: {
                base: "data-[state=checked]:bg-error",
            },
        },
        size: {
            sm: {
                base: "h-5 w-9",
                thumb: "size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
            },
            md: {
                base: "h-[22px] w-10",
                thumb: "size-[18px] data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0",
            },
            lg: {
                base: "h-6 w-12",
                thumb: "size-5 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
            },
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            className: {
                base: "data-[state=checked]:bg-default-700",
            },
        },
        {
            variant: "solid",
            color: "primary",
            className: {
                base: "data-[state=checked]:bg-primary",
            },
        },
        {
            variant: "solid",
            color: "secondary",
            className: {
                base: "data-[state=checked]:bg-secondary",
            },
        },
        {
            variant: "solid",
            color: "success",
            className: {
                base: "data-[state=checked]:bg-success",
            },
        },
        {
            variant: "solid",
            color: "error",
            className: {
                base: "data-[state=checked]:bg-error",
            },
        },
        {
            variant: "soft",
            color: "default",
            className: {
                base: "data-[state=checked]:bg-default-300",
                thumb: "data-[state=checked]:bg-default-600",
            },
        },
        {
            variant: "soft",
            color: "primary",
            className: {
                base: "data-[state=checked]:bg-primary/20",
                thumb: "data-[state=checked]:bg-primary",
            },
        },
        {
            variant: "soft",
            color: "secondary",
            className: {
                base: "data-[state=checked]:bg-secondary/20",
                thumb: "data-[state=checked]:bg-secondary",
            },
        },
        {
            variant: "soft",
            color: "success",
            className: {
                base: "data-[state=checked]:bg-success/20",
                thumb: "data-[state=checked]:bg-success",
            },
        },
        {
            variant: "soft",
            color: "error",
            className: {
                base: "data-[state=checked]:bg-error/20",
                thumb: "data-[state=checked]:bg-error",
            },
        },
    ],
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
    },
});

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitives.Root> & VariantProps<typeof switchTheme>;

export const Switch = ({ className, color, size, variant, ...props }: SwitchProps) => (
    <SwitchPrimitives.Root className={switchTheme({ variant, color, size }).base({ className })} {...props}>
        <SwitchPrimitives.Thumb className={switchTheme({ variant, color, size }).thumb()} />
    </SwitchPrimitives.Root>
);
