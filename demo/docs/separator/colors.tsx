import { Separator } from "@/components/ui/separator";

export const Demo = () => {
    return (
        <div className="w-80 space-y-3">
            <Separator className="h-[3px]" />
            <Separator className="bg-primary/40 h-[3px]" />
            <Separator className="bg-secondary/40 h-[3px]" />
            <Separator className="bg-success/40 h-[3px]" />
            <Separator className="bg-error/40 h-[3px]" />
        </div>
    );
};
