import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <Switch id="--switch-label" {...props} />
            <Label htmlFor="--switch-label">Dark Mode</Label>
        </div>
    );
};
