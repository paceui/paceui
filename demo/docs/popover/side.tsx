import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const Demo = () => {
    return (
        <div className="flex items-center gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">Place content for the popover.</PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">Place content for the popover.</PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">Place content for the popover.</PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">Place content for the popover.</PopoverContent>
            </Popover>
        </div>
    );
};
