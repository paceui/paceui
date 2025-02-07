import * as nodePath from "node:path";
import { transformerNotationDiff, transformerNotationHighlight } from "@shikijs/transformers";
import { CodeToHastOptionsCommon } from "@shikijs/types";
import { readFile } from "node:fs/promises";
import { codeToHtml } from "shiki";

import { ClientCodePreview } from "./client-code-preview";

type Props = {
    path?: string;
    code?: string;
    lang?: CodeToHastOptionsCommon["lang"];
};

export const CodePreview = async ({ path, code, lang = "tsx" }: Props) => {
    if (!code && path) code = await readFile(nodePath.join(process.cwd(), `/${path}.tsx`), "utf8");

    if (!code) {
        return <p>Error in Code Preview</p>;
    }

    const filterText = (text: string): string => {
        const removeProps = text.replaceAll("{ ...props }: { [key: string]: string }", "");
        return removeProps.replaceAll(" {...props}", "");
    };

    const filteredText = filterText(code);

    const html = await codeToHtml(filteredText, {
        lang: lang,
        theme: "github-dark-default",
        transformers: [
            transformerNotationHighlight({ matchAlgorithm: "v3" }),
            transformerNotationDiff({ matchAlgorithm: "v3" }),
        ],
    });

    return (
        <div className="mt-5 mb-4 overflow-hidden rounded">
            <ClientCodePreview html={html} />
        </div>
    );
};
