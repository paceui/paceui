"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronDownIcon } from "lucide-react";
import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const accordionTheme = tv({
    slots: {
        base: "",
        item: "[&[data-disabled]]:opacity-60",
        trigger:
            "group flex w-full cursor-pointer items-center justify-between py-2.5 text-sm font-medium transition-all disabled:pointer-events-none",
        triggerIcon:
            "text-default-600 group-data-[state=open]:text-default-800 size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
        content:
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mt-1 overflow-hidden text-sm",
    },
    variants: {
        variant: {
            underline: {
                item: "border-b last-of-type:border-0",
                trigger: "hover:underline",
            },
            outline: {
                base: "space-y-2",
                item: "rounded border",
                trigger: "hover:bg-default-100 rounded px-4",
                content: "px-4",
            },
            soft: {
                base: "space-y-2",
                item: "bg-default-100 rounded",
                trigger: "hover:bg-default-200 rounded px-4",
                content: "px-4",
            },
        },
    },
    defaultVariants: {
        variant: "underline",
    },
});

type ThemeProps = VariantProps<typeof accordionTheme>;

const AccordionContext = React.createContext<ThemeProps>(accordionTheme.defaultVariants);

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & ThemeProps;

export const Accordion = ({ variant, className, ...props }: AccordionProps) => {
    return (
        <AccordionContext.Provider value={{ variant }}>
            <AccordionPrimitive.Root className={accordionTheme().base({ variant, className })} {...props} />
        </AccordionContext.Provider>
    );
};

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
    const { variant } = React.use(AccordionContext);
    return <AccordionPrimitive.Item className={cn(accordionTheme().item({ variant }), className)} {...props} />;
};

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & { icon?: ReactNode };

export const AccordionTrigger = ({ className, icon, children, ...props }: AccordionTriggerProps) => {
    const { variant } = React.use(AccordionContext);

    const Icon = icon || <ChevronDownIcon />;

    return (
        <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className={cn(accordionTheme({ variant }).trigger(), className)} {...props}>
                {children}
                <Slot className={accordionTheme().triggerIcon()}>{Icon}</Slot>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
};

export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;

export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => {
    const { variant } = React.use(AccordionContext);

    return (
        <AccordionPrimitive.Content className={accordionTheme({ variant }).content()} {...props}>
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
};
