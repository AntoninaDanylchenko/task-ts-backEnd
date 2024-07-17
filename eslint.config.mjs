import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  configPrettier,
  importPlugin.configs.recommended, // Add import plugin recommended configuration
  {
    rules: {
      "prettier/prettier": "error", // Run Prettier as an ESLint rule
    },
    settings: {
      "import/resolver": {
        typescript: {}, // This enables the TypeScript resolver
      },
    },
  },
];
