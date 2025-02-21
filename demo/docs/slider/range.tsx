import { Slider } from "@/components/ui/slider";

export const Demo = ({ ...props }) => {
    return <Slider defaultValue={[20, 80]} minStepsBetweenThumbs={5} max={100} step={1} {...props} />;
};
