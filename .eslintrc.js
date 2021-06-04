module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        // Uncomment the line below if you want to solve some type-aware problems
        // related with reactive assignments and store subscriptions
        // https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
        // "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
    {
      files: ["*.stories.{js,ts}"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
  ],
  plugins: ["svelte3", "@typescript-eslint"],
  settings: {
    "svelte3/typescript": require("typescript"),
    "svelte3/ignore-styles": () => true,
  },
};
