import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        federation({
            name: "navigationbar",
            filename: "remoteEntry.js",
            exposes: {
                "./Navigationbar": "./src/app/App.tsx",
            },
            shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
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
                entryFileNames: (assetInfo) => {
                    if (assetInfo.name === "remoteEntry") {
                        return "navigationbar/assets/remoteEntry.js";
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
