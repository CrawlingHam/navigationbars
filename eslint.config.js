import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        ignores: ["dist/**", "node_modules/**", "coverage/**"],
    },
    js.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.app.json",
                tsconfigRootDir: ".",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                process: "readonly",
                console: "readonly",
                __dirname: "readonly",
                React: "readonly",
                JSX: "readonly",
                ...globals.browser,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-console": ["warn", { allow: ["warn", "error", "log"] }],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "prefer-const": "error",
            "no-var": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
        },
    },
];
