var path = require('path');
module.exports = {
    entry: './assets/js/index.jsx',
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
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.(scss)$/,
                use: [
                {
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function () { // postcss plugins, can be exported to postcss.config.js
                            return [
                            require('autoprefixer')
                            ];
                        }
                        }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }
            ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
    ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
};

