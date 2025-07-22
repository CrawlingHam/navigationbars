import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
    return {
        base: mode === "production" ? "/navigationbar/react" : "/",
        plugins: [
            react(),
            tailwindcss(),
            federation({
                exposes: { "./Navigationbar": "./src/app/App.tsx" },
                shared: ["react", "react-dom"],
                filename: "remoteEntry.js",
                name: "navigationbar",
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
