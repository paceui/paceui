"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

export type TabsPros = React.ComponentProps<typeof TabsPrimitive.Root>;

export const Tabs = ({ ...props }: TabsPros) => <TabsPrimitive.Root {...props} />;

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
    return (
        <TabsPrimitive.List
            className={cn(
                "border-default-200 inline-flex w-full items-center justify-start gap-0.5 border-b",
                className,
            )}
            {...props}
        />
    );
};

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
    return (
        <TabsPrimitive.Trigger
            className={cn(
                "data-[state=active]:border-default-600 inline-flex cursor-pointer items-center justify-center border-b-2 border-transparent px-2.5 py-1.5 text-sm whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:font-medium",
                className,
            )}
            {...props}
        />
    );
};

export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

export const TabsContent = ({ className, ...props }: TabsContentProps) => (
    <TabsPrimitive.Content className={cn("mt-2", className)} {...props} />
);
