import js from "@eslint/js";
import globals from "globals";
import cucumber from "eslint-plugin-cucumber";
import prettier from "eslint-plugin-prettier";
import { configs as wdioConfig, rules as wdioRules } from "eslint-plugin-wdio";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.cucumber,
        ...wdioConfig.recommended.globals
      }
    },
    plugins: {
      cucumber,
      prettier,
      ["wdio"]: { rules: wdioRules }
    },
    rules: {
      "no-var": "error",
      quotes: ["error", "double", "backtick"],
      "require-jsdoc": "off",
      indent: ["error", 2],
      "object-curly-spacing": ["error", "always"],
      "no-undef": "error",
      "prefer-const": "error",
      "no-unused-vars": ["warn", { varsIgnorePattern: "^(capabilities|specs)$", args: "none" }],
      "no-multiple-empty-lines": "warn",
      "prettier/prettier": ["error", { endOfLine: "lf" }]
    }
  }
];
