class VeliteWebpackPlugin {
    static started = false;
    apply(/** @type {import('webpack').Compiler} */ compiler) {
        compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
            if (VeliteWebpackPlugin.started) return;
            VeliteWebpackPlugin.started = true;
            const dev = compiler.options.mode === "development";
            const { build } = await import("velite");
            await build({ watch: dev, clean: !dev });
        });
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.plugins.push(new VeliteWebpackPlugin());
        return config;
    },
    outputFileTracingIncludes: {
        "/": ["./components/**/*", "./demo/**/*"],
    },
    async redirects() {
        return [
            {
                source: "/r/:path([^.]*)",
                destination: "/r/:path.json",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
