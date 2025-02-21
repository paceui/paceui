import { Slider } from "@/components/ui/slider";

export const Demo = ({ ...props }) => {
    return <Slider defaultValue={[33]} max={100} step={1} {...props} />;
};
