import { join } from "node:path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
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
        pagerPrev: s
            .object({
                link: s.string(),
                title: s.string(),
            })
            .optional(),
        pagerNext: s
            .object({
                link: s.string(),
                title: s.string(),
            })
            .optional(),
    }),
});

export default defineConfig({
    root: join(process.cwd(), "./content/"),
    collections: {
        docs,
    },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
