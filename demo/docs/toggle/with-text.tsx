import { Link2Icon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export const Demo = ({ ...props }) => {
    return (
        <Toggle {...props} defaultPressed>
            <Link2Icon className="size-4" />
            Link
        </Toggle>
    );
};
