import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="--default" {...props} />
            <Label htmlFor="--default">Accept terms and conditions</Label>
        </div>
    );
};
