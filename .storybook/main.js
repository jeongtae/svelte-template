const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  features: {
    postcss: false,
  },
  webpackFinal: config => {
    const svelteLoader = config.module.rules.find(r => r.loader?.includes("svelte-loader"));
    svelteLoader.options.preprocess = sveltePreprocess({
      typescript: { transpileOnly: true },
      postcss: require("../postcss.config"),
    });
    return config;
  },
};
