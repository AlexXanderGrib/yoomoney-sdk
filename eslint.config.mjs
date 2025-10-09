import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-config-prettier";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "node_modules",
      "src/generated/types.ts",
      "*.js",
      "scripts",
      "*.mjs"
    ]
  },

  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  unicorn.configs.all,
  pluginSecurity.configs.recommended,
  prettier,

  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },

    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.node
      },

      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname
      }
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "new-cap": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-spread": "off",
      "security/detect-non-literal-fs-filename": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-empty-object-type": [
        "warn",
        { allowObjectTypes: "always" }
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          extendDefaultReplacements: true,
          replacements: {
            lib: {
              library: false
            }
          }
        }
      ]
    }
  }
);
