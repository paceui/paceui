import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Demo = ({ ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <RadioGroup defaultValue="item-2" className="flex">
                <RadioGroupItem value="item-1" {...props} />
                <RadioGroupItem value="item-2" {...props} />
            </RadioGroup>
            <RadioGroup defaultValue="item-2" className="flex">
                <RadioGroupItem value="item-1" {...props} disabled />
                <RadioGroupItem value="item-2" {...props} disabled />
            </RadioGroup>
        </div>
    );
};
