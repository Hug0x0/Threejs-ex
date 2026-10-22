const TerserPlugin = require('terser-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'production',
        optimization: { minimizer: [new TerserPlugin({ parallel: 2 })] },
        plugins:
        [
            new CleanWebpackPlugin()
        ]
    }
)
