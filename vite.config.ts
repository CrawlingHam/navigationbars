import federation from "@originjs/vite-plugin-federation";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "") as NodeJS.ProcessEnv;

    try {
        process.env.VITE_DOMAIN = env.VITE_DOMAIN;
        if (process.env.VITE_DOMAIN !== env.VITE_DOMAIN) throw new Error("Missing VITE_DOMAIN environment variable");

        return {
            plugins: [
                react(),
                tailwindcss(),
                federation({
                    name: "navigationbar",
                    filename: "remoteEntry.js",
                    exposes: {
                        "./Navigationbar": "./src/app/App.tsx",
                    },
                    shared: ["react", "react-dom", "zustand", "zod", "axios"],
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
            define: {
                "process.env": {
                    VITE_DOMAIN: process.env.VITE_DOMAIN,
                },
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
        };
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error("\n❌ Environment variable validation failed:");
            console.error(error.message);
        } else {
            console.error("\n❌ An unknown error occurred during environment variable validation");
        }
        console.error("\nPlease ensure all required environment variables are set in your .env file:");
        console.error("Required variables: VITE_DOMAIN");
        process.exit(1);
    }
});
