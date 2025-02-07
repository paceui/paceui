import { cn } from "@/lib/utils";

export const ClientCodePreview = ({ html }: { html: string }) => {
    return (
        <>
            <div
                className={cn("text-sm [&>.shiki]:max-h-[700px] [&>.shiki]:overflow-scroll [&>.shiki]:p-3")}
                dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
    );
};
