import { CircleOffIcon, Edit2Icon, ScanEyeIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Demo = ({ ...props }) => {
    return (
        <div className="w-full max-w-80 space-y-1.5">
            <div>
                <Label>Enabled</Label>
                <Input type="text" startContent={<Edit2Icon />} placeholder="Write anything..." {...props} />
            </div>

            <div>
                <Label>Readonly</Label>
                <Input
                    type="text"
                    startContent={<ScanEyeIcon />}
                    placeholder="Read Only"
                    {...props}
                    defaultValue="You can only read this input"
                    readOnly
                />
            </div>
            <div>
                <Label>Disabled</Label>
                <Input startContent={<CircleOffIcon />} type="text" placeholder="Can't touch me" {...props} disabled />
            </div>
        </div>
    );
};
