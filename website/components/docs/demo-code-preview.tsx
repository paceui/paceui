import { DemoPreview } from "./demo-preview";

type Props = {
    path: string;
};

export const DemoCodePreview = ({ path }: Props) => {
    return <DemoPreview path={path} />;
};
