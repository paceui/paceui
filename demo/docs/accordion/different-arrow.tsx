import { ArrowBigDownIcon, ChevronsDownIcon, SquareChevronDown } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Demo = ({ ...props }) => {
    return (
        <Accordion type="single" className="w-full" {...props}>
            <AccordionItem value="item-1">
                <AccordionTrigger icon={<SquareChevronDown />}>Are components reusable?</AccordionTrigger>
                <AccordionContent>Yes, highly modular and reusable.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger icon={<ChevronsDownIcon />}>Can I customize styles?</AccordionTrigger>
                <AccordionContent>Yes, easily with Tailwind or CSS.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger icon={<ArrowBigDownIcon />}>Are components accessible?</AccordionTrigger>
                <AccordionContent>Yes, fully accessible with ARIA support.</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
