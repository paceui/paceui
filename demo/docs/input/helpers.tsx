import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full max-w-80">
            <Label>Email Address</Label>
            <Input type="text" placeholder="Email" {...props} />
            <div>
                <span className="text-default-500 text-sm">We&apos;ll never share your email with anyone else</span>
            </div>
        </div>
    );
};
