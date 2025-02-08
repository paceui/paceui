import { BellRingIcon, XIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Demo = ({ ...props }: { [key: string]: string }) => {
    return (
        <Alert startContent={<BellRingIcon className="size-5" />} endContent={<XIcon className="size-5" />} {...props}>
            <AlertTitle>Order Confirmed!</AlertTitle>
            <AlertDescription>A confirmation email will be sent shortly. Thank you for your purchase!</AlertDescription>
        </Alert>
    );
};
