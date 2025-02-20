import * as fs from "node:fs/promises";
import path from "path";
import { RegistryItem } from "shadcn/registry";

import { componentRegistries } from "./registry-components";
import { setupRegistry } from "./registry-init";
import { styleRegistries } from "./registry-style";

// Registry paths
const REGISTRY_PATH = path.join(process.cwd(), "public/r/");
const COMPONENT_REGISTRY_PATH = REGISTRY_PATH + "components/";
const STYLE_REGISTRY_PATH = REGISTRY_PATH + "styles/";
const INIT_REGISTRY_DEST = REGISTRY_PATH + "init.json";

// Project source path
const SOURCE_PATH = path.join(process.cwd(), "/");

const buildRegistry = async (name: string, path: string, registries: RegistryItem[]) => {
    try {
        await fs.mkdir(path, { recursive: true });
    } catch (e) {
        console.info(e);
    }

    for (const item of registries) {
        const DEST = path + item.name + ".json";
        const newFiles = [];
        for (const file of item.files ?? []) {
            const content = await fs.readFile(SOURCE_PATH + `${name}/` + file.path, { encoding: "utf8" });
            newFiles.push({
                ...file,
                content,
            });
        }
        await fs.writeFile(DEST, JSON.stringify({ ...item, files: newFiles }), {
            encoding: "utf8",
        });
    }
};

const init = async () => {
    // registry:build - components/**
    await buildRegistry("components", COMPONENT_REGISTRY_PATH, componentRegistries);

    // registry:build - styles/**
    await buildRegistry("styles", STYLE_REGISTRY_PATH, styleRegistries);

    // registry:build - init
    await fs.writeFile(INIT_REGISTRY_DEST, JSON.stringify(setupRegistry));
};

init().then(() => {
    console.log("✅ Done!");
});
