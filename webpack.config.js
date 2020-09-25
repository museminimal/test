const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: __dirname + "/app/index.js",
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|woff)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: './public',
        port: 3000,
    },
    resolve: {
        alias: {
            "@styles": path.resolve(__dirname, 'app/scss'),
            "@images": path.resolve(__dirname, 'public/assets/images'),
            "@fonts": path.resolve(__dirname, 'public/assets/fonts'),
        }
    }
};
