var webpack = require('webpack');

module.exports = {
    entry: {
        devtool: 'source-map'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
