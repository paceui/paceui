import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full">
            <Label htmlFor="--with-helper">Please share your opinions</Label>
            <Textarea className="mt-1" id="--with-helper" placeholder="It has good features, etc" {...props} />
            <p className="text-default-600 mt-1 text-sm">Don&apos;t give your personal details to anyone</p>
        </div>
    );
};
