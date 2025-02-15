"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Demo = ({ ...props }) => {
    const [value, setValue] = useState<string>("item-1");

    return (
        <div>
            <p className="text-default-600 text-sm">
                Selected tab: {value}
                <span onClick={() => setValue("item-1")} className="text-primary ms-1 cursor-pointer hover:underline">
                    (Reset)
                </span>
            </p>
            <Tabs value={value} onValueChange={setValue} className="mt-3 w-[400px]" {...props}>
                <TabsList>
                    <TabsTrigger value="item-1">Item 1</TabsTrigger>
                    <TabsTrigger value="item-2">Item 2</TabsTrigger>
                    <TabsTrigger value="item-3">Item 3</TabsTrigger>
                    <TabsTrigger value="item-4">Item 4</TabsTrigger>
                </TabsList>
                <TabsContent value="item-1">Item 1</TabsContent>
                <TabsContent value="item-2">Item 2</TabsContent>
                <TabsContent value="item-3">Item 3</TabsContent>
                <TabsContent value="item-4">Item 4</TabsContent>
            </Tabs>
        </div>
    );
};
