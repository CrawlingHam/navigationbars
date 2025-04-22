import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
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
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            // React Hooks rules
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // React Refresh rules
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // General rules
            "no-console": ["warn", { allow: ["warn", "error", "log"] }],
            "prefer-const": "error",
            "no-var": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "after-used",
                    vars: "all",
                    caughtErrors: "all",
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
];
