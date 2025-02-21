import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Demo = () => {
    return (
        <div className="flex items-center gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Start</Button>
                    </TooltipTrigger>
                    <TooltipContent align="start">
                        <p>
                            <code>align=&quot;start&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Center</Button>
                    </TooltipTrigger>
                    <TooltipContent align="center">
                        <p>
                            <code>align=&quot;center&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">End</Button>
                    </TooltipTrigger>
                    <TooltipContent align="end">
                        <p>
                            <code>align=&quot;end&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};
