import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const Demo = ({ ...props }) => {
    return (
        <Alert {...props}>
            <AlertTitle>Notice</AlertTitle>
            <AlertDescription>The UI components have been successfully updated.</AlertDescription>
        </Alert>
    );
};
