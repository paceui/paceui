import { ReactNode } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type CalloutProps = {
    title?: string;
    children: ReactNode;
    className?: string;
};

export const Callout = ({ title, children, className }: CalloutProps) => {
    return (
        <Alert variant="soft" className={className}>
            {title && <AlertTitle>{title}</AlertTitle>}
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
};
