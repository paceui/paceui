import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

export const toggleTheme = tv({
    base: [
        "ring-offset-background inline-flex cursor-pointer items-center justify-center gap-2 rounded font-medium transition-all",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
    ],

    variants: {
        variant: {
            ghost: "",
            outline: "",
            solid: "",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            success: "",
            error: "",
        },
        size: {
            sm: "h-9 px-2.5 text-sm [&>svg]:size-3.5",
            md: "h-10 px-3 [&>svg]:size-4",
            lg: "h-11 px-4 [&>svg]:size-5",
        },
    },
    compoundVariants: [
        {
            variant: "ghost",
            color: "default",
            className: "hover:bg-default-100 data-[state=on]:bg-default-100",
        },
        {
            variant: "ghost",
            color: "primary",
            className:
                "hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary/10 data-[state=on]:text-primary",
        },
        {
            variant: "ghost",
            color: "secondary",
            className:
                "hover:bg-secondary/10 hover:text-secondary data-[state=on]:bg-secondary/10 data-[state=on]:text-secondary",
        },
        {
            variant: "ghost",
            color: "success",
            className:
                "hover:bg-success/10 hover:text-success data-[state=on]:bg-success/10 data-[state=on]:text-success",
        },
        {
            variant: "ghost",
            color: "error",
            className: "hover:bg-error/10 hover:text-error data-[state=on]:bg-error/10 data-[state=on]:text-error",
        },
        {
            variant: "outline",
            color: "default",
            className: "border-default-200 hover:bg-default-100 data-[state=on]:bg-default-100 border",
        },
        {
            variant: "outline",
            color: "primary",
            className:
                "hover:border-primary/40 hover:bg-primary/10 hover:text-primary data-[state=on]:border-primary/80 data-[state=on]:bg-primary/10 data-[state=on]:text-primary border",
        },
        {
            variant: "outline",
            color: "secondary",
            className:
                "hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary data-[state=on]:border-secondary/80 data-[state=on]:bg-secondary/10 data-[state=on]:text-secondary border",
        },
        {
            variant: "outline",
            color: "success",
            className:
                "hover:border-success/40 hover:bg-success/10 hover:text-success data-[state=on]:border-success/80 data-[state=on]:bg-success/10 data-[state=on]:text-success border",
        },
        {
            variant: "outline",
            color: "error",
            className:
                "hover:border-error/40 hover:bg-error/10 hover:text-error data-[state=on]:border-error/80 data-[state=on]:bg-error/10 data-[state=on]:text-error border",
        },
        {
            variant: "solid",
            color: "default",
            className: "hover:bg-default-100 data-[state=on]:bg-default-700 data-[state=on]:text-default-100",
        },
        {
            variant: "solid",
            color: "primary",
            className:
                "hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        },
        {
            variant: "solid",
            color: "secondary",
            className:
                "hover:bg-secondary/10 hover:text-secondary data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
        },
        {
            variant: "solid",
            color: "success",
            className:
                "hover:bg-success/10 hover:text-success data-[state=on]:bg-success data-[state=on]:text-success-foreground",
        },
        {
            variant: "solid",
            color: "error",
            className:
                "hover:bg-error/10 hover:text-error data-[state=on]:bg-error data-[state=on]:text-error-foreground",
        },
    ],
    defaultVariants: {
        variant: "ghost",
        size: "md",
        color: "default",
    },
});

export type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleTheme>;

export const Toggle = ({ className, variant, size, color, ...props }: ToggleProps) => (
    <TogglePrimitive.Root className={toggleTheme({ variant, size, color, className })} {...props} />
);
