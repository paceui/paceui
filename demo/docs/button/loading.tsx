import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Demo = ({ ...props }) => {
    return (
        <Button {...props} disabled>
            <Loader2Icon className="animate-spin" />
            Loading
        </Button>
    );
};
