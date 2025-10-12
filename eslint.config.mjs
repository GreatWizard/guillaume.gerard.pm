import { defineConfig } from "eslint/config";
import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser.js";

const rules = {
  lineLength: "markdownlint/md013",
};

export default defineConfig([
  {
    files: ["content/**/*.md"],
    plugins: {
      markdownlint: markdownlintPlugin,
    },
    languageOptions: {
      parser: markdownlintParser,
    },
    rules: {
      ...markdownlintPlugin.configs.recommended.rules,
      [rules["lineLength"]]: 0,
    },
  },
]);
