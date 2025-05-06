import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        federation({
            name: "navigationbar",
            filename: "remoteEntry.js",
            exposes: {
                "./Navigationbar": "./src/app/App.vue",
            },
            shared: ["vue", "pinia", "reka-ui"],
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "./src"),
            },
        ],
    },
    build: {
        chunkSizeWarningLimit: 600,
        cssCodeSplit: false,
        assetsDir: "assets",
        minify: "esbuild",
        target: "esnext",
        outDir: "dist",
        rollupOptions: {
            output: {
                entryFileNames: (assetInfo) => {
                    if (assetInfo.name === "remoteEntry") {
                        return "navigationbar/vue/assets/remoteEntry.js";
                    }
                    return "assets/[name].js";
                },
                chunkFileNames: "assets/[name].js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.names?.includes("style.css")) return "assets/style.css";
                    return "assets/[name][extname]";
                },
            },
        },
    },
});
