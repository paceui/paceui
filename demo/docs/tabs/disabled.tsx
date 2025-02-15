import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Demo = ({ ...props }) => {
    return (
        <Tabs defaultValue="overview" className="w-[400px]" {...props}>
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks" disabled>
                    Tasks
                </TabsTrigger>
                <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">View the project overview here.</TabsContent>
            <TabsContent value="tasks">Manage project tasks and deadlines here.</TabsContent>
            <TabsContent value="files">Access and upload project files here.</TabsContent>
        </Tabs>
    );
};
