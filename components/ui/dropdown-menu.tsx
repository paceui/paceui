import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { type VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

export const dropdownItemTheme = tv({
    base: [
        "relative flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    variants: {
        variant: {
            solid: "",
            outline: "border border-transparent",
            soft: "",
            ghost: "hover:font-medium",
        },
        color: {
            default: "",
            primary: "",
            secondary: "",
            error: "",
        },
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            className: "hover:bg-default-700 hover:text-background",
        },
        {
            variant: "solid",
            color: "primary",
            className: "hover:bg-primary hover:text-primary-foreground",
        },
        {
            variant: "solid",
            color: "secondary",
            className: "hover:bg-secondary hover:text-secondary-foreground",
        },
        {
            variant: "solid",
            color: "error",
            className: "hover:bg-error hover:text-error-foreground",
        },
        {
            variant: "outline",
            color: "default",
            className: "hover:border-default-200 hover:bg-default-100",
        },
        {
            variant: "outline",
            color: "primary",
            className: "hover:border-primary/60 hover:bg-primary/10 hover:text-primary",
        },
        {
            variant: "outline",
            color: "secondary",
            className: "hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary",
        },
        {
            variant: "outline",
            color: "error",
            className: "hover:border-error/60 hover:bg-error/10 hover:text-error",
        },
        {
            variant: "soft",
            color: "default",
            className: "hover:bg-default-100",
        },
        {
            variant: "soft",
            color: "primary",
            className: "hover:bg-primary/10 hover:text-primary",
        },
        {
            variant: "soft",
            color: "secondary",
            className: "hover:bg-secondary/10 hover:text-secondary",
        },
        {
            variant: "soft",
            color: "error",
            className: "hover:bg-error/10 hover:text-error",
        },
        {
            variant: "ghost",
            color: "default",
            className: "",
        },

        {
            variant: "ghost",
            color: "primary",
            className: "hover:text-primary",
        },
        {
            variant: "ghost",
            color: "secondary",
            className: "hover:text-secondary",
        },
        {
            variant: "ghost",
            color: "error",
            className: "hover:text-error",
        },
    ],
    defaultVariants: {
        variant: "soft",
        color: "default",
    },
});

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> &
    VariantProps<typeof dropdownItemTheme> & {
        inset?: boolean;
    };

export const DropdownMenuSubTrigger = ({
    className,
    inset,
    variant,
    color,
    children,
    ...props
}: DropdownMenuSubTriggerProps) => (
    <DropdownMenuPrimitive.SubTrigger
        className={cn(dropdownItemTheme({ variant, color, className }), inset && "pl-8")}
        {...props}>
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
);

export type DropdownMenuSubContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>;

const menuContentClasses = [
    "bg-popover text-popover-foreground z-50 min-w-[8rem] overflow-hidden rounded border p-1 shadow-lg",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
];

export const DropdownMenuSubContent = ({ className, ...props }: DropdownMenuSubContentProps) => (
    <DropdownMenuPrimitive.SubContent className={cn(...menuContentClasses, className)} {...props} />
);

export type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;

export const DropdownMenuContent = ({ className, sideOffset = 4, ...props }: DropdownMenuContentProps) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            sideOffset={sideOffset}
            className={cn(...menuContentClasses, "space-y-0.5", className)}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
);

export type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenuPrimitive.Item> &
    VariantProps<typeof dropdownItemTheme> & {
        inset?: boolean;
    };

export const DropdownMenuItem = ({ className, variant, color, inset, ...props }: DropdownMenuItemProps) => (
    <DropdownMenuPrimitive.Item
        className={cn(dropdownItemTheme({ variant, color, className }), inset && "pl-8")}
        {...props}
    />
);

export type DropdownMenuCheckboxItemProps = VariantProps<typeof dropdownItemTheme> &
    React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>;

export const DropdownMenuCheckboxItem = ({
    className,
    variant,
    color,
    children,
    checked,
    ...props
}: DropdownMenuCheckboxItemProps) => (
    <DropdownMenuPrimitive.CheckboxItem
        className={cn(dropdownItemTheme({ variant, color, className }), "pl-8")}
        checked={checked}
        {...props}>
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon className="size-4" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
);

export type DropdownMenuRadioItemProps = VariantProps<typeof dropdownItemTheme> &
    React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>;

export const DropdownMenuRadioItem = ({
    className,
    variant,
    color,
    children,
    ...props
}: DropdownMenuRadioItemProps) => (
    <DropdownMenuPrimitive.RadioItem
        className={cn(dropdownItemTheme({ variant, color, className }), "pl-8")}
        {...props}>
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <CircleIcon className="size-2 fill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
);

export type DropdownMenuLabelProps = React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
};

export const DropdownMenuLabel = ({ className, inset, ...props }: DropdownMenuLabelProps) => (
    <DropdownMenuPrimitive.Label
        className={cn("px-2 py-1 text-sm font-medium", inset && "pl-8", className)}
        {...props}
    />
);

export type DropdownMenuSeparatorProps = React.ComponentProps<typeof DropdownMenuPrimitive.Separator>;

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => (
    <DropdownMenuPrimitive.Separator className={cn("bg-default-200 -mx-1 !my-1 h-px", className)} {...props} />
);

export type DropdownMenuShortcutProps = React.ComponentProps<"span">;

export const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
    return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
