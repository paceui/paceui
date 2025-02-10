import { Separator } from "@/components/ui/separator";

export const Demo = () => {
    return (
        <div>
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Snips</div>
                <Separator orientation="vertical" />
                <div>Blocks</div>
                <Separator orientation="vertical" />
                <div>Stay tuned 👀</div>
            </div>
            <Separator className="my-4" />
            <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">PaceUI</h4>
                <p className="text-default-600 text-sm">An open-source UI component library.</p>
            </div>
        </div>
    );
};
