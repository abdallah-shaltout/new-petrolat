// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "vue/attributes-order": "off",
      "vue/html-self-closing": "off",
      "vue/attribute-hyphenation": "off",
      "vue/v-on-event-hyphenation": "off",
      camelcase: [
        "error",
        {
          properties: "never", // Don't enforce for object properties
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: true,
        },
      ],
      "vue/require-default-prop": "off",
      "import/consistent-type-specifier-style": "off",

      "import/first": "warn",
    },
  },
);
