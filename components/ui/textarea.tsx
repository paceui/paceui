import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

const textareaTheme = tv({
    slots: {
        base: [
            "peer flex w-full gap-2 rounded transition-all",
            "has-[textarea:disabled]:opacity-80 has-[textarea:read-only]:opacity-80",
        ],
        textarea: [
            "placeholder:text-default-600 flex min-h-[80px] grow bg-transparent placeholder:text-sm",
            "focus-visible:ring-0 focus-visible:outline-none disabled:cursor-not-allowed",
        ],
    },
    variants: {
        variant: {
            outline: "bg-background border",
            soft: "",
            underline: "rounded-b-none border-b-2",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            success: "",
            error: "",
        },
        size: {
            sm: "px-2 py-1.5 text-sm",
            md: "px-3 py-2",
            lg: "px-4 py-2.5 text-lg",
        },
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "default",
            className: "border-default-200 focus-within:border-default-300",
        },
        {
            variant: "outline",
            color: "primary",
            className: {
                base: "border-primary/80 text-primary focus-within:border-primary",
                textarea: "placeholder:text-primary/80",
            },
        },
        {
            variant: "outline",
            color: "secondary",
            className: {
                base: "border-secondary/80 text-secondary focus-within:border-secondary",
                textarea: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "outline",
            color: "success",
            className: {
                base: "border-success/80 text-success focus-within:border-success",
                textarea: "placeholder:text-success/80",
            },
        },
        {
            variant: "outline",
            color: "error",
            className: {
                base: "border-error/80 text-error focus-within:border-error",
                textarea: "placeholder:text-error/80",
            },
        },
        {
            variant: "soft",
            color: "default",
            className: "bg-default-100 focus-within:bg-default-200/60",
        },
        {
            variant: "soft",
            color: "primary",
            className: {
                base: "bg-primary/10 text-primary focus-within:bg-primary/15",
                textarea: "placeholder:text-primary/80",
            },
        },
        {
            variant: "soft",
            color: "secondary",
            className: {
                base: "bg-secondary/10 text-secondary focus-within:bg-secondary/15",
                textarea: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "soft",
            color: "success",
            className: {
                base: "bg-success/10 text-success focus-within:bg-success/15",
                textarea: "placeholder:text-success/80",
            },
        },
        {
            variant: "soft",
            color: "error",
            className: {
                base: "bg-error/10 text-error focus-within:bg-error/15",
                textarea: "placeholder:text-error/80",
            },
        },
        {
            variant: "underline",
            color: "default",
            className: "border-default-300 bg-default-100",
        },
        {
            variant: "underline",
            color: "primary",
            className: {
                base: "border-primary bg-primary/10 text-primary focus-within:bg-primary/15",
                textarea: "placeholder:text-primary/80",
            },
        },
        {
            variant: "underline",
            color: "secondary",
            className: {
                base: "border-secondary bg-secondary/10 text-secondary focus-within:bg-secondary/15",
                textarea: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "underline",
            color: "success",
            className: {
                base: "border-success bg-success/10 text-success focus-within:bg-success/15",
                textarea: "placeholder:text-success/80",
            },
        },
        {
            variant: "underline",
            color: "error",
            className: {
                base: "border-error bg-error/10 text-error focus-within:bg-error/15",
                textarea: "placeholder:text-error/80",
            },
        },
    ],
    defaultVariants: {
        variant: "outline",
        color: "default",
        size: "md",
    },
});

export type TextareaProps = React.ComponentProps<"textarea"> &
    VariantProps<typeof textareaTheme> & {
        textareaClassName?: string;
    };

export const Textarea = ({ className, variant, color, size, textareaClassName, ...props }: TextareaProps) => {
    return (
        <div className={textareaTheme({ variant, color, size, className }).base()}>
            <textarea
                className={textareaTheme({ variant, color, className: textareaClassName }).textarea()}
                {...props}></textarea>
        </div>
    );
};
