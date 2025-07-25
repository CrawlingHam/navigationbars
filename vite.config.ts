import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
    return {
        base: mode === "production" ? "/navigationbar/vue" : "/",
        plugins: [
            vue(),
            tailwindcss(),
            federation({
                exposes: { "./Navigationbar": "./src/app/App.vue" },
                shared: ["vue", "reka-ui"],
                filename: "remoteEntry.js",
                name: "navigationbar",
            }),
        ],
        resolve: {
            alias: [
                {
                    replacement: resolve(__dirname, "./src"),
                    find: "@",
                },
            ],
        },
        build: {
            chunkSizeWarningLimit: 500,
            cssCodeSplit: false,
            assetsDir: "assets",
            minify: "esbuild",
            target: "esnext",
            outDir: "dist",
            rollupOptions: {
                output: {
                    assetFileNames: "assets/[name][extname]",
                    entryFileNames: "assets/[name].js",
                    chunkFileNames: "assets/[name].js",
                },
            },
        },
    };
});
