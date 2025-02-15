import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Demo = ({ ...props }) => {
    return (
        <Accordion type="multiple" defaultValue={["item-2"]} className="w-full" {...props}>
            <AccordionItem value="item-1" disabled>
                <AccordionTrigger>It is disabled</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
                <AccordionTrigger>Disabled with open state</AccordionTrigger>
                <AccordionContent>
                    You can set defaultValue or value to open specific item with disabled
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Still working?</AccordionTrigger>
                <AccordionContent>
                    Yes. It is animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
