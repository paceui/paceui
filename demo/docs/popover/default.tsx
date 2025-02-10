import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Demo = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open</Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover.</PopoverContent>
        </Popover>
    );
};
