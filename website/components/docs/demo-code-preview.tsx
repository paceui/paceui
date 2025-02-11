import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodePreview } from "./code-preview";
import { DemoPreview, DemoPreviewProps } from "./demo-preview";

type Props = {
    path: string;
    props: DemoPreviewProps[];
};

export const DemoCodePreview = ({ path, props }: Props) => {
    return (
        <Tabs defaultValue="preview" className="mt-3">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
                <DemoPreview path={path} props={props} />
            </TabsContent>
            <TabsContent value="code" className="mt-4">
                <CodePreview path={"demo/" + path} removeExtraProps />
            </TabsContent>
        </Tabs>
    );
};
