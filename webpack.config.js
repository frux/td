const {DefinePlugin} = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const DIRS = require('./config/dirs');

module.exports = {
    entry: [`${DIRS.SRC}/index.ts`],
    output: {
        filename: 'index.js',
        path: DIRS.BUILD
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
        })
    ],
    devtool: 'sourcemap'
};