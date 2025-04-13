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
      globals: {
        module: "readonly", // module değişkenini tanımlamak için
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      // js.configs.recommended ve tseslint.configs.recommended'ın içindeki kurallar
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": "warn", // Kullanılmayan değişkenler için
      "@typescript-eslint/no-explicit-any": "warn", // any kullanımına karşı uyarı
      "@typescript-eslint/no-unsafe-function-type": "off", // unsafe-function-type hatasını kapat
      "no-undef": "error", // "module" gibi tanımlanmamış global değişkenler için hata verir
    },
  },
];
