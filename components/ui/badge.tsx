import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";

const badgeTheme = tv({
    base: "inline-flex items-center justify-center rounded-full transition-all",
    variants: {
        variant: {
            solid: "",
            outline: "border",
            soft: "",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            error: "",
        },
        size: {
            sm: "gap-1 px-1.5 py-0.5 text-[12px] [&>svg]:size-3",
            md: "gap-1 px-2.5 py-1 text-[13px] [&>svg]:size-3.5",
            lg: "gap-1.5 px-3 py-1 text-[14px] [&>svg]:size-4",
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            className: "bg-default-700 text-background",
        },
        {
            variant: "solid",
            color: "primary",
            className: "bg-primary text-primary-foreground",
        },
        {
            variant: "solid",
            color: "secondary",
            className: "bg-secondary text-secondary-foreground",
        },
        {
            variant: "solid",
            color: "error",
            className: "bg-error text-error-foreground",
        },
        {
            variant: "outline",
            color: "primary",
            className: "border-primary text-primary",
        },
        {
            variant: "outline",
            color: "secondary",
            className: "border-secondary text-secondary",
        },
        {
            variant: "outline",
            color: "error",
            className: "border-error text-error",
        },
        {
            variant: "soft",
            color: "default",
            className: "bg-default-100",
        },
        {
            variant: "soft",
            color: "primary",
            className: "bg-primary/10 text-primary",
        },
        {
            variant: "soft",
            color: "secondary",
            className: "bg-secondary/10 text-secondary",
        },
        {
            variant: "soft",
            color: "error",
            className: "bg-error/10 text-error",
        },
    ],
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
    },
});

export type BadgeProps = React.ComponentProps<"div"> & VariantProps<typeof badgeTheme>;

export const Badge = ({ className, variant, color, size, children, ...props }: BadgeProps) => (
    <div className={badgeTheme({ variant, color, size, className })} {...props}>
        {children}
    </div>
);
