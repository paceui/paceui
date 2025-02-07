import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodePreview } from "@/website/components/docs/code-preview";

import { DemoPreview } from "./demo-preview";

type Props = {
    path: string;
};

export const DemoCodePreview = ({ path }: Props) => {
    return (
        <Tabs defaultValue="preview" className="mt-3">
            <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4">
                <DemoPreview path={path} />
            </TabsContent>
            <TabsContent value="code" className="mt-4">
                <CodePreview path={"demo/" + path} />
            </TabsContent>
        </Tabs>
    );
};
