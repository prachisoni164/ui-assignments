import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser, 
    },
    rules: {
      ...pluginJs.configs.recommended.rules, 
      ...pluginReact.configs.flat.recommended.rules, 
    },
  },
];
