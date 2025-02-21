import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Demo = () => {
    return (
        <div className="flex items-center gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        <p>
                            <code>side=&quot;left&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p>
                            <code>side=&quot;top&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>
                            <code>side=&quot;bottom&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>
                            <code>side=&quot;right&quot;</code>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};
