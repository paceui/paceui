import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Demo = () => {
    return (
        <div className="flex items-center gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Start</Button>
                </PopoverTrigger>
                <PopoverContent align="start">Place content for the popover.</PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Center</Button>
                </PopoverTrigger>
                <PopoverContent align="center">Place content for the popover.</PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">End</Button>
                </PopoverTrigger>
                <PopoverContent align="end">Place content for the popover.</PopoverContent>
            </Popover>
        </div>
    );
};
