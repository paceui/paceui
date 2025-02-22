import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { CircleIcon } from "lucide-react";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const radioTheme = tv({
    slots: {
        base: [
            "aspect-square size-4 rounded-full",
            "ring-offset-background focus-visible:ring-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
        ],
        icon: "",
    },
    variants: {
        variant: {
            outline: "border",
            soft: "",
        },
        color: {
            default: "",
            primary: "",
            success: "",
            secondary: "",
            error: "",
        },
        size: {
            sm: {
                base: "size-4",
                icon: "size-2.5",
            },
            md: {
                base: "size-[18px]",
                icon: "size-3",
            },
            lg: {
                base: "size-5",
                icon: "size-3.5",
            },
        },
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "default",
            className: {
                base: "border-default-700 data-[state=checked]:bg-default-700",
                icon: "fill-background text-background",
            },
        },
        {
            variant: "outline",
            color: "primary",
            className: {
                base: "border-primary data-[state=checked]:bg-primary",
                icon: "fill-primary-foreground text-primary-foreground",
            },
        },
        {
            variant: "outline",
            color: "secondary",
            className: {
                base: "border-secondary data-[state=checked]:bg-secondary",
                icon: "fill-secondary-foreground text-secondary-foreground",
            },
        },
        {
            variant: "outline",
            color: "success",
            className: {
                base: "border-success data-[state=checked]:bg-success",
                icon: "fill-success-foreground text-success-foreground",
            },
        },
        {
            variant: "outline",
            color: "error",
            className: {
                base: "border-error data-[state=checked]:bg-error",
                icon: "fill-error-foreground text-error-foreground",
            },
        },
        {
            variant: "soft",
            color: "default",
            className: {
                base: "bg-default-200",
                icon: "fill-default-700 text-default-700",
            },
        },
        {
            variant: "soft",
            color: "primary",
            className: {
                base: "bg-primary/15",
                icon: "fill-primary text-primary",
            },
        },
        {
            variant: "soft",
            color: "secondary",
            className: {
                base: "bg-secondary/15",
                icon: "fill-secondary text-secondary",
            },
        },
        {
            variant: "soft",
            color: "success",
            className: {
                base: "bg-success/15",
                icon: "fill-success text-success",
            },
        },
        {
            variant: "soft",
            color: "error",
            className: {
                base: "bg-error/15",
                icon: "fill-error text-error",
            },
        },
    ],

    defaultVariants: {
        color: "default",
        size: "md",
        variant: "outline",
    },
});

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root>;

export const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
    return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} />;
};

export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioTheme> & {
        icon?: React.ReactNode;
    };

export const RadioGroupItem = ({ className, color, variant, size, icon, ...props }: RadioGroupItemProps) => {
    const Icon = icon || <CircleIcon />;

    return (
        <RadioGroupPrimitive.Item className={radioTheme({ color, size, variant }).base({ className })} {...props}>
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Slot className={radioTheme({ color, size, variant }).icon()}>{Icon}</Slot>
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
};
