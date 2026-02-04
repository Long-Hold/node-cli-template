import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js", "**/__tests__/**/*.js"],
    ...jest.configs["flat/recommended"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  prettier,
];