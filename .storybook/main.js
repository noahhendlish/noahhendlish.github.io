let custom = require('./../webpack.config');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/preset-scss"

  ],
  "core": {
    "builder": "webpack5"
  },
   /*webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },*/
}
