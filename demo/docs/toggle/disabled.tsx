import { BoldIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex gap-4">
            <Toggle {...props} disabled>
                <BoldIcon className="size-4" />
            </Toggle>
            <Toggle {...props} disabled defaultPressed>
                <BoldIcon className="size-4" />
            </Toggle>
        </div>
    );
};
