import { SparklesIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const Demo = ({ ...props }) => {
    return (
        <Badge {...props}>
            <SparklesIcon />
            Released 1.0
        </Badge>
    );
};
