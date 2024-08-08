import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {ignores:["cypress/**/*","**/*.config.*","**/*.js"]},
  {files: ["src/**/*.{ts}"]},
  {files: ["/src/**/*.ts"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
];