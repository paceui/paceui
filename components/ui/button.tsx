import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, tv } from "tailwind-variants";

export const buttonTheme = tv({
    base: "inline-flex cursor-pointer items-center justify-center transition-all disabled:opacity-60",
    variants: {
        variant: {
            solid: "",
            outline: "border",
            soft: "",
            ghost: "",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            error: "",
        },
        size: {
            sm: "gap-1.5 rounded-sm text-sm [&>svg]:size-4",
            md: "gap-2.5 rounded [&>svg]:size-5",
            lg: "gap-3 rounded-lg text-lg [&>svg]:size-6",
        },
        onlyIcon: {
            true: "",
        },
        disabled: {
            true: "pointer-events-none opacity-60",
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            className: "bg-default-700 text-background hover:bg-opacity-90",
        },
        {
            variant: "solid",
            color: "primary",
            className: "bg-primary text-primary-foreground hover:bg-opacity-90",
        },
        {
            variant: "solid",
            color: "secondary",
            className: "bg-secondary text-secondary-foreground hover:bg-opacity-90",
        },
        {
            variant: "solid",
            color: "error",
            className: "bg-error text-error-foreground hover:bg-opacity-90",
        },
        {
            variant: "outline",
            color: "default",
            className: "border-default-200 hover:bg-default-100",
        },
        {
            variant: "outline",
            color: "primary",
            className: "border-primary text-primary hover:bg-primary/10",
        },
        {
            variant: "outline",
            color: "secondary",
            className: "border-secondary text-secondary hover:bg-secondary/10",
        },
        {
            variant: "outline",
            color: "error",
            className: "border-error text-error hover:bg-error/10",
        },
        {
            variant: "soft",
            color: "default",
            className: "bg-default-100 hover:bg-default-200",
        },
        {
            variant: "soft",
            color: "primary",
            className: "bg-primary/10 text-primary hover:bg-primary/15",
        },
        {
            variant: "soft",
            color: "secondary",
            className: "bg-secondary/10 text-secondary hover:bg-secondary/15",
        },
        {
            variant: "soft",
            color: "error",
            className: "bg-error/10 text-error hover:bg-error/15",
        },
        {
            variant: "ghost",
            color: "default",
            className: "hover:bg-default-100",
        },

        {
            variant: "ghost",
            color: "primary",
            className: "text-primary hover:bg-primary/10",
        },
        {
            variant: "ghost",
            color: "secondary",
            className: "text-secondary hover:bg-secondary/10",
        },
        {
            variant: "ghost",
            color: "error",
            className: "text-error hover:bg-error/10",
        },
        {
            size: "sm",
            onlyIcon: true,
            className: "size-7",
        },
        {
            size: "sm",
            onlyIcon: false,
            className: "h-7 px-2.5",
        },
        {
            size: "md",
            onlyIcon: true,
            className: "size-9",
        },
        {
            size: "md",
            onlyIcon: false,
            className: "h-9 px-3",
        },
        {
            size: "lg",
            onlyIcon: true,
            className: "size-11",
        },
        {
            size: "lg",
            onlyIcon: false,
            className: "h-11 px-4",
        },
    ],
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
        onlyIcon: false,
    },
});

export type ButtonProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonTheme> & {
        asChild?: boolean;
    };

export const Button = ({
    className,
    asChild = false,
    variant,
    color,
    size,
    onlyIcon,
    children,
    disabled,
    ...props
}: ButtonProps) => {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={buttonTheme({ variant, color, className, size, onlyIcon, disabled })}
            disabled={disabled}
            {...props}>
            {children}
        </Comp>
    );
};
