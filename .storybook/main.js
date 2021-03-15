const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: config => {
    const svelteLoader = config.module.rules.find(r => r.loader?.includes("svelte-loader"));
    svelteLoader.options.preprocess = sveltePreprocess({
      typescript: { transpileOnly: true },
    });
    return config;
  },
};
