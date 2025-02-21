import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

const sliderTheme = tv({
    slots: {
        base: "relative flex w-full touch-none items-center select-none",
        track: "relative w-full grow overflow-hidden rounded-full",
        range: "absolute h-full",
        thumb: "bg-background ring-offset-background focus-visible:ring-ring block cursor-pointer rounded-full border-2 transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    },
    variants: {
        color: {
            default: {
                track: "bg-default-100",
                range: "bg-default-600",
                thumb: "border-default-600",
            },
            primary: {
                track: "bg-primary/20",
                range: "bg-primary",
                thumb: "border-primary",
            },
            secondary: {
                track: "bg-secondary/20",
                range: "bg-secondary",
                thumb: "border-secondary",
            },
            success: {
                track: "bg-success/20",
                range: "bg-success",
                thumb: "border-success",
            },
            error: {
                track: "bg-error/20",
                range: "bg-error",
                thumb: "border-error",
            },
        },
        size: {
            sm: {
                track: "h-1.5",
                thumb: "size-4 hover:size-[18px]",
            },
            md: {
                track: "h-2",
                thumb: "size-5 hover:size-[22px]",
            },
            lg: {
                track: "h-2.5",
                thumb: "size-6 hover:size-[26px]",
            },
        },
    },
    defaultVariants: {
        color: "default",
        size: "md",
    },
});

export type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & VariantProps<typeof sliderTheme>;

export const Slider = ({ className, color, size, ...props }: SliderProps) => (
    <SliderPrimitive.Root className={sliderTheme().base({ className, color, size })} {...props}>
        <SliderPrimitive.Track className={sliderTheme().track({ color, size })}>
            <SliderPrimitive.Range className={sliderTheme().range({ color, size })} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={sliderTheme().thumb({ color, size })} />
        <SliderPrimitive.Thumb className={sliderTheme().thumb({ color, size })} />
    </SliderPrimitive.Root>
);
