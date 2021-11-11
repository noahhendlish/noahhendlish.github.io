//const webpack = require('./webpack.config');
module.exports = {
    components: './assets/js/playroom/components',
    outputPath: './dist/playroom',

    // Optional:
    title: 'My Awesome Library',
    themes: './src/themes',
    snippets: './playroom/snippets.js',
    frameComponent: './playroom/FrameComponent.js',
    scope: './playroom/useScope.js',
    widths: [320, 768, 1024],
    port: 9000,
    openBrowser: true,
    paramType: 'search', // default is 'hash'
    exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
    baseUrl: '/playroom/',
    webpackConfig: () => ({
        // Custom webpack config goes here...
        //webpack
    }),
    iframeSandbox: 'allow-scripts',
};