export type PackageManager = "npm" | "yarn" | "bun" | "pnpm";

const installCommands: Record<PackageManager, string> = {
    npm: "npm install",
    yarn: "yarn add",
    bun: "bun add",
    pnpm: "pnpm add",
};

const executeCommands: Record<PackageManager, string> = {
    npm: "npx",
    yarn: "npx",
    pnpm: "pnpm dlx",
    bun: "bunx --bun",
};

const createCommands: Record<PackageManager, string> = {
    npm: "npm create",
    yarn: "yarn create",
    pnpm: "pnpm create",
    bun: "bun create",
};

export const getCommandAsPackageManager = (command: string, manager: PackageManager) => {
    return command
        .replaceAll(installCommands.npm, installCommands[manager])
        .replaceAll(executeCommands.npm, executeCommands[manager])
        .replaceAll(createCommands.npm, createCommands[manager]);
};
