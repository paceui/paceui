import { BellRingIcon, XIcon } from "lucide-react";

import { Alert, AlertTitle } from "@/components/ui/alert";

export const Demo = ({ ...props }) => {
    return (
        <Alert startContent={<BellRingIcon className="size-5" />} endContent={<XIcon className="size-5" />} {...props}>
            <AlertTitle>Order Confirmed!</AlertTitle>
        </Alert>
    );
};
