import { BriefcaseIcon, HomeIcon, InfoIcon, MailIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Demo = ({ ...props }) => {
    return (
        <Tabs defaultValue="home" className="w-[400px]" {...props}>
            <TabsList>
                <TabsTrigger value="home" className="gap-1.5">
                    <HomeIcon className="size-4" /> Home
                </TabsTrigger>
                <TabsTrigger value="about" className="gap-1.5">
                    <InfoIcon className="size-4" /> About
                </TabsTrigger>
                <TabsTrigger value="services" className="gap-1.5">
                    <BriefcaseIcon className="size-4" /> Services
                </TabsTrigger>
                <TabsTrigger value="contact" className="gap-1.5">
                    <MailIcon className="size-4" /> Contact
                </TabsTrigger>
            </TabsList>
            <TabsContent value="home">Welcome to the home page!</TabsContent>
            <TabsContent value="about">Learn more about our company.</TabsContent>
            <TabsContent value="services">Explore the services we offer.</TabsContent>
            <TabsContent value="contact">Get in touch with us here.</TabsContent>
        </Tabs>
    );
};
