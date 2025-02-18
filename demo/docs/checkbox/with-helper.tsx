import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex space-x-2">
            <Checkbox id="--with-text" {...props} />
            <div className="space-y-1 leading-none">
                <Label htmlFor="--with-text">Accept terms and conditions</Label>
                <p className="text-default-600 text-sm"> You agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    );
};
