import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

/* eslint-env node */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules/", "dist/", "build/"],
    languageOptions: {
      parser: tsparser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "warn",
    },
  },
];
