import { join } from "node:path";
import { defineCollection, defineConfig, s } from "velite";

const docs = defineCollection({
    name: "Doc",
    pattern: "docs/**/*.mdx",
    schema: s.object({
        slug: s.slug("docs"),
        path: s.path(),
        title: s.string().max(99),
        description: s.string().max(100),
        links: s
            .object({
                api: s.string().optional(),
            })
            .optional(),
        code: s.mdx(),
        toc: s.toc(),
    }),
});

export default defineConfig({
    root: join(process.cwd(), "./content/"),
    collections: {
        docs,
    },
});
