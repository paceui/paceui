import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;

export const Accordion = ({ className, ...props }: AccordionProps) => {
    return <AccordionPrimitive.Root className={cn({ className })} {...props} />;
};

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
    return (
        <AccordionPrimitive.Item
            className={cn("border-b last-of-type:border-0 [&[data-disabled]]:opacity-60", className)}
            {...props}
        />
    );
};

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & { icon?: ReactNode };

export const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
    return (
        <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
                className={cn(
                    "group flex w-full cursor-pointer items-center justify-between py-2.5 text-sm font-medium transition-all hover:underline disabled:pointer-events-none",
                    className,
                )}
                {...props}>
                {children}
                <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
};

export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;

export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => {
    return (
        <AccordionPrimitive.Content
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mt-1 overflow-hidden text-sm"
            {...props}>
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
};
