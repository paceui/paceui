import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="space-y-3">
            <div className="flex items-center space-x-2">
                <Checkbox id="--animation-duration-300" className="duration-300" {...props} />
                <Label
                    htmlFor="--animation-duration-300"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Duration: 300ms
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="--animation-duration-500" className="duration-500" {...props} />
                <Label
                    htmlFor="--animation-duration-500"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Duration: 500ms
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="--animation-duration-1000" className="duration-1000" {...props} />
                <Label
                    htmlFor="--animation-duration-1000"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Duration: 1000ms
                </Label>
            </div>
        </div>
    );
};
