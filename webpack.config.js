const { resolve } = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        "lambda-dom": "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'umd'),
        filename: '[name].js',
        library: 'LambdaDom',
        libraryTarget: 'umd',
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            }
        ],
    }
};
