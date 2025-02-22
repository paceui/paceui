import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full">
            <Label htmlFor="--with-label">What do you think about this?</Label>
            <Textarea className="mt-1" id="--with-label" placeholder="It has good features, etc" {...props} />
        </div>
    );
};
