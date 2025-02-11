import * as nodePath from "node:path";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import { CodeToHastOptionsCommon } from "@shikijs/types";
import { readFile } from "node:fs/promises";
import { codeToHtml } from "shiki";

import { ClientCodePreview } from "./client-code-preview";
import { ClipboardButton } from "./clipboard-button";

type Props = {
    path?: string;
    code?: string;
    collapsible?: boolean;
    removeExtraProps?: boolean;
    lang?: CodeToHastOptionsCommon["lang"];
};

export const CodePreview = async ({ path, code, collapsible, removeExtraProps = false, lang = "tsx" }: Props) => {
    if (!code && path) code = await readFile(nodePath.join(process.cwd(), `/${path}.tsx`), "utf8");

    if (!code) {
        return <p>Error in Code Preview</p>;
    }

    const filterText = (text: string): string => {
        if (!removeExtraProps) return text;
        return text.replaceAll(/\{\s*\.\.\.props\s*}/g, "");
    };

    const removeCustomTransformer = (text: string): string => {
        const regexPattern = /\/\/ \[!code( [^\]]+)?]/g;
        return text.replaceAll(regexPattern, "");
    };

    const filteredText = filterText(code);

    const copingText = removeCustomTransformer(filteredText);

    const html = await codeToHtml(filteredText, {
        lang: lang,
        theme: "github-dark-default",
        transformers: [
            transformerNotationHighlight({ matchAlgorithm: "v3" }),
            transformerNotationDiff({ matchAlgorithm: "v3" }),
        ],
    });

    return (
        <div className="relative mt-5 mb-4 overflow-hidden rounded">
            <ClientCodePreview html={html} collapsible={collapsible} />
            <div className="absolute end-6 top-3 z-10">
                <ClipboardButton text={copingText} />
            </div>
        </div>
    );
};
