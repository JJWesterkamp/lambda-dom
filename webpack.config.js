const { resolve } = require('path');

module.exports = {
    mode: "production",
    target: 'es5',
    entry: {
        "lambda-dom": "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'umd'),
        filename: '[name].js',
        library: 'LD',
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
