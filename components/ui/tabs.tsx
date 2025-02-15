"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const tabsTheme = tv({
    slots: {
        list: "border-default-200 inline-flex w-full items-center justify-start gap-0.5 border-b",
        trigger: [
            "inline-flex cursor-pointer items-center justify-center px-2.5 text-sm whitespace-nowrap transition-all data-[state=active]:font-medium",
            "disabled:pointer-events-none disabled:opacity-50",
        ],
    },
    variants: {
        variant: {
            underline: {
                trigger: "data-[state=active]:border-default-600 border-b-2 border-transparent py-1.5",
            },
            ghost: {
                list: "py-1",
                trigger: "hover:bg-default-100 data-[state=active]:bg-default-100 rounded bg-transparent py-1",
            },
        },
    },
    defaultVariants: {
        variant: "underline",
    },
});

type ThemeProps = VariantProps<typeof tabsTheme>;

const TabsContext = React.createContext<ThemeProps>({ variant: "underline" });

export type TabsPros = React.ComponentProps<typeof TabsPrimitive.Root> & ThemeProps;

export const Tabs = ({ variant, ...props }: TabsPros) => (
    <TabsContext.Provider value={{ variant }}>
        <TabsPrimitive.Root {...props} />
    </TabsContext.Provider>
);

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
    const { variant } = React.use(TabsContext);
    return <TabsPrimitive.List className={tabsTheme().list({ className, variant })} {...props} />;
};

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
    const { variant } = React.use(TabsContext);

    return <TabsPrimitive.Trigger className={tabsTheme().trigger({ className, variant })} {...props} />;
};

export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

export const TabsContent = ({ className, ...props }: TabsContentProps) => (
    <TabsPrimitive.Content className={cn("mt-2", className)} {...props} />
);
