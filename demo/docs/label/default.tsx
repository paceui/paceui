import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Demo = () => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    );
};
