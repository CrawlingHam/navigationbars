import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsEslint from "typescript-eslint";
import eslintJs from "@eslint/js";
import globals from "globals";

export default [
    {
        //---- GLOBAL IGNORES
        ignores: ["**/dist/", "**/node_modules/"],
    },
    // general defaults
    eslintJs.configs["recommended"],
    // general
    {
        files: ["**/*.{js,ts,jsx,tsx,vue}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                process: "readonly",
                console: "readonly",
                __dirname: "readonly",
                ...globals.browser,
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
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

    // typescript
    {
        files: ["**/*.{ts,tsx,vue}"],
        languageOptions: {
            parser: tsEslint.parser,
        },
    },

    // chosen vue defaults
    ...pluginVue.configs["flat/essential"],
    // vue
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tsEslint.parser, // parse TS inside VUE
            },
        },
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
    // Override for shadcn components
    {
        files: ["src/components/shadcn/ui/**/*.vue"],
        rules: {
            "vue/multi-word-component-names": "off",
        },
    },
];
