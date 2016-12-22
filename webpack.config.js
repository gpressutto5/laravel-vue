var webpack = require('webpack');

module.exports = {
    entry: {
        admin: './resources/assets/admin/js/admin.js'
    },
    output: {
        path: __dirname + '/public/build',
        filename: '[name].bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.$': 'jquery',
            'windows.jQuery': 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
};
