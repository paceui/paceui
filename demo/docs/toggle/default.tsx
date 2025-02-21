import { BoldIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export const Demo = ({ ...props }) => {
    return (
        <Toggle {...props}>
            <BoldIcon className="size-4" />
        </Toggle>
    );
};
