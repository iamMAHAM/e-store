import { inProduction } from "./src/utils/env";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "prettier/prettier": [
      "error",
      { singleQuote: true, vueIndentScriptAndStyle: false },
    ],
    "no-console": inProduction ? "warn" : "off",
  },
};
