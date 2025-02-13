import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full max-w-80">
            <Label htmlFor="--input-labelled">Email Address</Label>
            <Input id="--input-labelled" type="text" placeholder="Email" {...props} />
        </div>
    );
};
