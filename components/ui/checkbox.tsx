import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { CheckIcon } from "lucide-react";
import { VariantProps, tv } from "tailwind-variants";

const checkboxTheme = tv({
    slots: {
        base: [
            "peer shrink-0 rounded-sm text-transparent transition-all",
            "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
        ],
        indicator: "flex items-center justify-center",
        icon: "p-px",
    },
    variants: {
        color: {
            default: "",
            primary: "",
            secondary: "",
            error: "",
        },
        variant: {
            outline: "border",
            soft: "",
        },
        size: {
            sm: {
                base: "size-3.5",
                icon: "size-3",
            },
            md: {
                base: "size-[18px]",
                icon: "size-4",
            },
            lg: {
                base: "size-[22px]",
                icon: "size-5",
            },
        },
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "default",
            className: "border-default-700 data-[state=checked]:bg-default-700 data-[state=checked]:text-background",
        },
        {
            variant: "outline",
            color: "primary",
            className: "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        },
        {
            variant: "outline",
            color: "secondary",
            className:
                "border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground",
        },
        {
            variant: "outline",
            color: "error",
            className: "border-error data-[state=checked]:bg-error data-[state=checked]:text-error-foreground",
        },
        {
            variant: "soft",
            color: "default",
            className: "bg-default-200 data-[state=checked]:text-default-800",
        },
        {
            variant: "soft",
            color: "primary",
            className: "bg-primary/15 data-[state=checked]:text-primary",
        },
        {
            variant: "soft",
            color: "secondary",
            className: "bg-secondary/15 data-[state=checked]:text-secondary",
        },
        {
            variant: "soft",
            color: "error",
            className: "bg-error/15 data-[state=checked]:text-error",
        },
    ],
    defaultVariants: {
        size: "md",
        color: "default",
        variant: "outline",
    },
});

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxTheme> & {
        icon?: React.ReactNode;
    };

export const Checkbox = ({ className, size, color, variant, icon, ...props }: CheckboxProps) => {
    const Icon = icon || <CheckIcon />;
    return (
        <CheckboxPrimitive.Root className={checkboxTheme({ color, variant, size }).base({ className })} {...props}>
            <CheckboxPrimitive.Indicator className={checkboxTheme({ size, variant, color }).indicator()}>
                <Slot className={checkboxTheme({ size, variant, color }).icon()}>{Icon}</Slot>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
};
