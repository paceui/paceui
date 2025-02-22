import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const artworks = [
    {
        artist: "Hoach Le Dinh",
        art: "https://images.unsplash.com/photo-1464423163665-75e82891f301?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Arun Clarke",
        art: "https://images.unsplash.com/photo-1618797127745-5fe49fd4e0df?auto=format&fit=crop&w=300&q=80",
    },

    {
        artist: "Esteban Amaro",
        art: "https://images.unsplash.com/photo-1635297383087-8842f98f908a?auto=format&fit=crop&w=300&q=80",
    },
] as const;

export const Demo = () => {
    return (
        <ScrollArea className="w-96 rounded border whitespace-nowrap">
            <div className="flex w-max space-x-4 p-4">
                {artworks.map((artwork) => (
                    <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded">
                            <img
                                src={artwork.art}
                                alt={`Photo by ${artwork.artist}`}
                                className="aspect-[3/4] size-fit object-cover"
                                width={300}
                                height={400}
                            />
                        </div>
                        <figcaption className="text-default-600 pt-2 text-center text-xs">
                            Photo by <span className="text-foreground font-medium">{artwork.artist} </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
