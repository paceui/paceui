import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

const inputTheme = tv({
    slots: {
        base: [
            "peer placeholder:text-default-600 flex w-full items-center gap-2 rounded transition-all",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "[&>svg]:opacity-60 [&>svg]:transition-opacity focus-within:[&>svg]:opacity-100",
            "has-[input:disabled]:opacity-80 has-[input:read-only]:opacity-80",
        ],
        input: [
            "grow bg-transparent",
            "file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "focus-visible:ring-0 focus-visible:outline-none",
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
            sm: "h-8 px-2 py-1.5 text-sm [&>svg]:size-3.5",
            md: "h-10 px-3 py-2 [&>svg]:size-4",
            lg: "h-12 px-4 py-2.5 text-lg [&>svg]:size-5",
        },
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "default",
            className: {
                base: "border-default-200 focus-within:border-default-300",
                input: "placeholder:text-default-600",
            },
        },
        {
            variant: "outline",
            color: "primary",
            className: {
                base: "border-primary/80 text-primary focus-within:border-primary",
                input: "placeholder:text-primary/80 text-primary",
            },
        },
        {
            variant: "outline",
            color: "secondary",
            className: {
                base: "border-secondary/80 text-secondary focus-within:border-secondary",
                input: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "outline",
            color: "success",
            className: {
                base: "border-success/80 text-success focus-within:border-success",
                input: "placeholder:text-success/80",
            },
        },
        {
            variant: "outline",
            color: "error",
            className: {
                base: "border-error/80 text-error focus-within:border-error",
                input: "placeholder:text-error/80",
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
                input: "placeholder:text-primary/80",
            },
        },
        {
            variant: "soft",
            color: "secondary",
            className: {
                base: "bg-secondary/10 text-secondary focus-within:bg-secondary/15",
                input: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "soft",
            color: "success",
            className: {
                base: "bg-success/10 text-success focus-within:bg-success/15",
                input: "placeholder:text-success/80",
            },
        },
        {
            variant: "soft",
            color: "error",
            className: {
                base: "bg-error/10 text-error focus-within:bg-error/15",
                input: "placeholder:text-error/80",
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
                input: "placeholder:text-primary/80",
            },
        },
        {
            variant: "underline",
            color: "secondary",
            className: {
                base: "border-secondary bg-secondary/10 text-secondary focus-within:bg-secondary/15",
                input: "placeholder:text-secondary/80",
            },
        },
        {
            variant: "underline",
            color: "success",
            className: {
                base: "border-success bg-success/10 text-success focus-within:bg-success/15",
                input: "placeholder:text-success/80",
            },
        },
        {
            variant: "underline",
            color: "error",
            className: {
                base: "border-error bg-error/10 text-error focus-within:bg-error/15",
                input: "placeholder:text-error/80",
            },
        },
    ],
    defaultVariants: {
        variant: "outline",
        color: "default",
        size: "md",
    },
});

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    VariantProps<typeof inputTheme> & {
        startContent?: React.ReactNode;
        endContent?: React.ReactNode;
        inputClassName?: string;
    };

export const Input = ({
    className,
    type,
    variant,
    size,
    color,
    startContent,
    endContent,
    inputClassName,
    ...props
}: InputProps) => {
    return (
        <div className={inputTheme({ variant, color, size }).base({ className })}>
            {startContent}
            <input
                type={type}
                className={inputTheme({ variant, color }).input({ className: inputClassName })}
                {...props}
            />
            {endContent}
        </div>
    );
};
