import { Separator } from "@/components/ui/separator";

export const Demo = () => {
    return (
        <div className="w-80 space-y-3">
            <Separator />
            <Separator className="h-[2px]" />
            <Separator className="h-[3px]" />
            <Separator className="h-[4px]" />
            <Separator className="h-[6px]" />
            <Separator className="h-[12px]" />
            <Separator className="h-[16px]" />
            <Separator className="h-[24px]" />
        </div>
    );
};
