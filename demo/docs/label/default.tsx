import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Demo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    );
};
