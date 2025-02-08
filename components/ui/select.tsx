"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";
import { SelectProps as RadixSelectProps } from "@radix-ui/react-select";
import { Slot } from "@radix-ui/react-slot";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const selectTheme = tv({
    slots: {
        base: "",
        trigger: [
            "flex w-full items-center justify-between gap-2 rounded [&>span]:line-clamp-1 [&>span]:text-start",
            "focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none",
            "placeholder:text-default-600",
            "disabled:cursor-not-allowed disabled:opacity-50",
        ],
        triggerIcon: "opacity-60",
    },
    variants: {
        variant: {
            outline: { trigger: "bg-background border" },
            soft: "",
            underline: { trigger: "rounded-b-none border-b-2" },
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            error: "",
        },
        size: {
            sm: { trigger: "h-8 px-2 py-1 text-xs", triggerIcon: "size-3.5" },
            md: { trigger: "h-10 px-3 py-2 text-sm", triggerIcon: "size-4" },
            lg: { trigger: "h-12 px-4 py-2.5", triggerIcon: "size-5" },
        },
    },
    compoundVariants: [
        {
            variant: "outline",
            color: "default",
            className: "border-default-200",
        },
        {
            variant: "outline",
            color: "primary",
            className: {
                trigger: "border-primary text-primary",
            },
        },
        {
            variant: "outline",
            color: "secondary",
            className: {
                trigger: "border-secondary text-secondary",
            },
        },
        {
            variant: "outline",
            color: "error",
            className: {
                trigger: "border-error text-error",
            },
        },
        {
            variant: "soft",
            color: "default",
            className: {
                trigger: "bg-default-100",
            },
        },
        {
            variant: "soft",
            color: "primary",
            className: {
                trigger: "bg-primary/10 text-primary",
            },
        },
        {
            variant: "soft",
            color: "secondary",
            className: {
                trigger: "bg-secondary/10 text-secondary",
            },
        },
        {
            variant: "soft",
            color: "error",
            className: {
                trigger: "bg-error/10 text-error",
            },
        },
        {
            variant: "underline",
            color: "default",
            className: {
                trigger: "bg-default-100",
            },
        },
        {
            variant: "underline",
            color: "primary",
            className: {
                trigger: "border-primary bg-primary/10 text-primary",
            },
        },
        {
            variant: "underline",
            color: "secondary",
            className: {
                trigger: "border-secondary bg-secondary/10 text-secondary",
            },
        },
        {
            variant: "underline",
            color: "error",
            className: {
                trigger: "border-error bg-error/10 text-error",
            },
        },
    ],
    defaultVariants: {
        size: "md",
        variant: "outline",
        color: "default",
    },
});

type ThemeProps = VariantProps<typeof selectTheme>;

const SelectContext = React.createContext<ThemeProps>(selectTheme.defaultVariants);

export type SelectProps = RadixSelectProps & ThemeProps;

export const Select = ({ children, color, variant, size, ...props }: SelectProps) => {
    return (
        <SelectContext.Provider value={{ color, variant, size }}>
            <SelectPrimitive.Select {...props}>{children}</SelectPrimitive.Select>
        </SelectContext.Provider>
    );
};

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    icon?: ReactNode;
};

export const SelectTrigger = ({ className, children, icon, ...props }: SelectTriggerProps) => {
    const { size, variant, color } = React.useContext(SelectContext);

    const Icon = icon || <ChevronDownIcon />;

    return (
        <SelectPrimitive.Trigger className={selectTheme({ size, color, variant }).trigger({ className })} {...props}>
            {children}
            <SelectPrimitive.Icon asChild>
                <Slot className={selectTheme({ size, color, variant }).triggerIcon()}>{Icon}</Slot>
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
};

export type SelectScrollUpButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>;

export const SelectScrollUpButton = ({ className, ...props }: SelectScrollUpButtonProps) => (
    <SelectPrimitive.ScrollUpButton
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}>
        <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
);

export type SelectScrollDownButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>;

export const SelectScrollDownButton = ({ className, ...props }: SelectScrollDownButtonProps) => (
    <SelectPrimitive.ScrollDownButton
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}>
        <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
);

export type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>;

export const SelectContent = ({ className, children, position = "popper", ...props }: SelectContentProps) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            className={cn(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded border shadow-md",
                position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                className,
            )}
            position={position}
            {...props}>
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                )}>
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
);

export type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>;

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => (
    <SelectPrimitive.Label className={cn("py-1.5 pr-2 pl-8 text-sm font-medium opacity-60", className)} {...props} />
);

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

export const SelectItem = ({ className, children, ...props }: SelectItemProps) => (
    <SelectPrimitive.Item
        className={cn(
            "focus:bg-default-100 focus:text-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        {...props}>
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <CheckIcon className="size-4" />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
);

export type SelectSeparatorProps = React.ComponentProps<typeof SelectPrimitive.Separator>;

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => (
    <SelectPrimitive.Separator className={cn("bg-default-200 -mx-1 my-1 h-px", className)} {...props} />
);
