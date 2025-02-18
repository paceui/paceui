import { BookmarkIcon, HeartIcon, MinusIcon, XIcon } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <Checkbox {...props} defaultChecked />
            <Checkbox defaultChecked icon={<MinusIcon />} {...props} />
            <Checkbox defaultChecked icon={<XIcon />} {...props} />
            <Checkbox defaultChecked icon={<BookmarkIcon />} {...props} />
            <Checkbox defaultChecked icon={<HeartIcon />} {...props} />
        </div>
    );
};
