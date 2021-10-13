let path = require('path');
//const autoprefixer = require('autoprefixer');
//const HtmlWebPackPlugin = require("html-webpack-plugin");
//const { ESBuildMinifyPlugin } = require('esbuild-loader');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//const configureFigma = require('react-figma-webpack-config');

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
        return require.resolve(url, {
            paths: [path.dirname(sourceFilename)]
        });
    } catch (e) {
        return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
        tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
            sourceFilename);
}

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
        const resolved = tryResolveScss(url, prev);
        return {
            file: resolved || url
        };
    }
    return {
        file: url
    };
}

module.exports = {
    entry: ['./assets/js/index.jsx'],
    output: {
        path: path.resolve(__dirname),
        filename: './bundle.js',
    },
    module: {
        rules: [{
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        //plugins: ['babel-plugin-styled-components'] //add babel-plugin-styled-components
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                //MiniCssExtractPlugin.loader,
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'style-loader', options: { // inject CSS to page
                        //sourceMap: true,
                    }
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    options: {
                        modules: true,
                        exportOnlyLocals: false,
                        //sourceMap: true,
                    }

                },
                {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        sourceMap: true,
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                            return [require('precss'),
                            require('autoprefixer'), require('tailwindcss')
                            ];
                        }
                        }
                },
                {
                    loader: 'sass-loader', // compiles Sass to CSS,
                    options: {
                        sourceMap: true,
                        // Prefer Dart Sass
                        implementation: require('sass'),

                        // See https://github.com/webpack-contrib/sass-loader/issues/804
                        //https://github.com/postcss/postcss-safe-parser
                        webpackImporter: false,
                        sassOptions: {
                            importer: materialImporter,
                            includePaths: ['./node_modules']
                        },
                    }
                }
            ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader']
            }
    ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    /*plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
        }),
    ]*/
};

