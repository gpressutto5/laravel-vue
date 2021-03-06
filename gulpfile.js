const gulp = require('gulp');
const elixir = require('laravel-elixir');
require('laravel-elixir-webpack-official');
require('laravel-elixir-vue-2');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig  = require('./webpack.config');
const webpackDevConfig  = require('./webpack.dev.config');

const mergeWebpack = require('webpack-merge');


Elixir.webpack.config.module.loaders = [];
Elixir.webpack.mergeConfig(webpackConfig);
Elixir.webpack.mergeConfig(webpackDevConfig);

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

gulp.task('webpack-dev-server', () => {
    let config = mergeWebpack(webpackConfig, webpackDevConfig);
    let inlineHot = [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://192.168.10.10:8080'
    ];
    config.entry.admin = [config.entry.admin].concat(inlineHot);
    new WebpackDevServer(webpack(config), {
        hot: true,
        proxy: {
            '*': 'http://192.168.10.10'
        },
        watchOptions: {
            poll: true,
            agregateTimeout: 300
        },
        publicPath: config.output.publicPath,
        noInfo: true,
        stats: { colors: true }
    }).listen(8080, "192.168.10.10", () => {
        console.log('Bundling project...');
    });
});

elixir(mix => {
    mix.sass('./resources/assets/admin/sass/admin.scss')
        .copy('./node_modules/materialize-css/fonts/roboto', './public/fonts/roboto');
    gulp.start('webpack-dev-server');
    mix.browserSync({
        proxy: 'http://192.168.10.10:8080',
        open: false,
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '10px',
                position: 'fixed',
                fontSize: '20px',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'black',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(60, 197, 31, 0.498039)'
            }
        }
    });
});
