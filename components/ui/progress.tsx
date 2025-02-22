import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

const progressTheme = tv({
    slots: {
        base: "relative w-full overflow-hidden rounded-full transition-all",
        indicator: "size-full flex-1 transition-all",
        label: "",
    },
    variants: {
        color: {
            default: {
                base: "bg-default-200",
                indicator: "bg-default-600",
                label: "data-[above-half=true]:text-background",
            },
            primary: {
                base: "bg-primary/10",
                indicator: "bg-primary",
                label: "text-primary data-[above-half=true]:text-primary-foreground",
            },
            secondary: {
                base: "bg-secondary/10",
                indicator: "bg-secondary",
                label: "text-secondary data-[above-half=true]:text-secondary-foreground",
            },
            success: {
                base: "bg-success/10",
                indicator: "bg-success",
                label: "text-success data-[above-half=true]:text-success-foreground",
            },
            error: {
                base: "bg-error/10",
                indicator: "bg-error",
                label: "text-error data-[above-half=true]:text-error-foreground",
            },
        },
        showLabel: {
            true: {
                label: "absolute left-1/2 z-10 -translate-x-1/2",
            },
            false: {
                label: "hidden",
            },
        },
        size: {
            sm: { base: "h-3", label: "text-[12px]/[12px]" },
            md: { base: "h-4", label: "text-[14px]/[16px]" },
            lg: { base: "h-5", label: "text-[16px]/[20px]" },
        },
        isStriped: {
            true: {
                indicator:
                    "bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
            },
        },
    },
    defaultVariants: {
        color: "default",
        size: "md",
        isStriped: false,
        showLabel: false,
    },
});

export type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & VariantProps<typeof progressTheme>;

export const Progress = ({ className, value, color, size, showLabel, isStriped, ...props }: ProgressProps) => (
    <ProgressPrimitive.Root className={progressTheme().base({ className, color, size })} {...props}>
        <p
            data-above-half={value && value > 50}
            className={progressTheme({ color, size, showLabel, isStriped }).label()}>
            {value}%
        </p>
        <ProgressPrimitive.Indicator
            className={progressTheme().indicator({ color, isStriped })}
            style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundSize: "32px 32px" }}
        />
    </ProgressPrimitive.Root>
);
