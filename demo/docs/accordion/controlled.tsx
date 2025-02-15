"use client";

import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Demo = ({ ...props }) => {
    const [selectedKeys, setSelectedKeys] = useState(["item-1"]);

    return (
        <div className="w-full">
            <p className="text-default-600 mb-2 text-sm">
                Selected: [{selectedKeys.join(", ")}]
                <span
                    className="text-primary ms-1 cursor-pointer hover:underline"
                    onClick={() => setSelectedKeys(["item-1", "item-2", "item-3"])}>
                    (Open All)
                </span>
            </p>
            <Accordion
                type="multiple"
                value={selectedKeys}
                onValueChange={setSelectedKeys}
                className="w-full"
                {...props}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Are components reusable?</AccordionTrigger>
                    <AccordionContent>Yes, highly modular and reusable.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I customize styles?</AccordionTrigger>
                    <AccordionContent>Yes, easily with Tailwind or CSS.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Are components accessible?</AccordionTrigger>
                    <AccordionContent>Yes, fully accessible with ARIA support.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
