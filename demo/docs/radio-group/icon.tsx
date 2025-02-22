import { BookmarkIcon, HeartIcon, MinusIcon, XIcon } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Demo = ({ ...props }) => {
    return (
        <RadioGroup defaultValue="item-5" className="flex items-center gap-3">
            <RadioGroupItem value="item-1" {...props} defaultChecked />
            <RadioGroupItem value="item-2" icon={<MinusIcon />} {...props} />
            <RadioGroupItem value="item-3" icon={<XIcon />} {...props} />
            <RadioGroupItem value="item-4" icon={<BookmarkIcon />} {...props} />
            <RadioGroupItem value="item-5" icon={<HeartIcon />} {...props} />
        </RadioGroup>
    );
};
