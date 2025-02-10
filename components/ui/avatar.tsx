import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import { type VariantProps, tv } from "tailwind-variants";

const avatarTheme = tv({
    slots: {
        base: "inline-block overflow-hidden",
        image: "aspect-square size-full",
        fallback: "inline-flex size-full items-center justify-center",
    },
    variants: {
        shape: {
            round: "rounded-full",
            square: "rounded",
        },
        size: {
            sm: "size-8 text-sm [&_svg]:size-4",
            md: "size-10 [&_svg]:size-5",
            lg: "size-12 [&_svg]:size-6",
        },
        color: {
            default: "bg-default-100",
            primary: "bg-primary/10 text-primary",
            secondary: "bg-secondary/10 text-secondary",
            error: "bg-error/10 text-error",
        },
    },
    defaultVariants: {
        shape: "round",
        size: "md",
        color: "default",
    },
});

export type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarTheme>;

export const Avatar = ({ className, shape, size, color, ...props }: AvatarProps) => (
    <AvatarPrimitive.Root className={avatarTheme().base({ className, color, size, shape })} {...props} />
);

export type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>;

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
    <AvatarPrimitive.Image className={avatarTheme().image({ className })} {...props} />
);

export type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>;

export const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => (
    <AvatarPrimitive.Fallback className={avatarTheme().fallback({ className })} {...props} />
);
