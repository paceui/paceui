import { AlarmClockIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Demo = ({ ...props }) => {
    return (
        <Button {...props} onlyIcon>
            <AlarmClockIcon />
        </Button>
    );
};
