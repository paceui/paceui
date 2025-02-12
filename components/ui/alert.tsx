import * as React from "react";
import { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const alertTheme = tv({
    slots: {
        base: "flex w-full gap-3 rounded-lg p-4 [&:not(:has([data-slot=description]))]:items-center",
        title: "leading-none font-medium tracking-tight",
        description: "text-sm",
    },
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
            success: "",
            error: "",
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
            color: "success",
            className: "bg-success text-success-foreground",
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
            color: "success",
            className: "border-success text-success",
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
            color: "success",
            className: "bg-success/10 text-success",
        },
        {
            variant: "soft",
            color: "error",
            className: "bg-error/10 text-error",
        },
    ],
    defaultVariants: {
        variant: "outline",
        color: "default",
    },
});

export type AlertProps = React.ComponentProps<"div"> &
    VariantProps<typeof alertTheme> & {
        startContent?: ReactNode;
        endContent?: ReactNode;
    };

export const Alert = ({ className, variant, color, startContent, endContent, children, ...props }: AlertProps) => (
    <div role="alert" className={alertTheme({ variant, color }).base({ className })} {...props}>
        {startContent && <span>{startContent}</span>}
        <div className="grow space-y-1">{children}</div>
        {endContent && <span>{endContent}</span>}
    </div>
);

export type AlertTitleProps = React.ComponentProps<"h5">;

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
    <h5 data-slot="title" className={alertTheme().title({ className })} {...props} />
);

export type AlertDescriptionProps = React.ComponentProps<"div">;

export const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => (
    <div data-slot="description" className={alertTheme().description({ className })} {...props} />
);
