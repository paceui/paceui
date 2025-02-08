import { Alert, AlertDescription } from "@/components/ui/alert";

export const Demo = ({ ...props }) => {
    return (
        <Alert {...props}>
            <AlertDescription>A confirmation email will be sent shortly. Thank you for your purchase!</AlertDescription>
        </Alert>
    );
};
