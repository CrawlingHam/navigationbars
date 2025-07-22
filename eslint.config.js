import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsEslint from "typescript-eslint";
import eslintJs from "@eslint/js";
import globals from "globals";

export default [
    eslintJs.configs["recommended"],
    {
        ignores: ["**/dist/", "**/node_modules/"],
    },
    {
        files: ["**/*.{ts,vue}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    destructuredArrayIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrors: "all",
                    args: "after-used",
                    vars: "all",
                },
            ],
        },
    },
    {
        files: ["**/*.{ts,vue}"],
        languageOptions: {
            parser: tsEslint.parser,
        },
    },
    ...pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsEslint.parser,
            },
        },
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
    {
        files: ["src/components/shadcn/ui/**/*.vue"],
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
];
