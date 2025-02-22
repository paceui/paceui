import { Fragment } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.0.0-alpha.${a.length - i}`);

export const Demo = () => {
    return (
        <ScrollArea className="h-72 w-48 rounded border">
            <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                {tags.map((tag) => (
                    <Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </Fragment>
                ))}
            </div>
        </ScrollArea>
    );
};
