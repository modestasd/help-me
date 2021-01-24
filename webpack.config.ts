import {Configuration as WebpackConfiguration, DefinePlugin, LoaderOptionsPlugin} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
import {default as path, join, resolve} from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

interface IConfiguration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

const root = (...args: Array<string>) => {
    args = args || [];
    return join.apply(path, [__dirname].concat(args));
};

const config: IConfiguration = {
    devtool: 'source-map',
    entry: {
        app: ['./src/index.tsx']
    },
    mode: isProd ? 'production' : 'development',
    output: isTest ? {} : {
        path: root('dist'),
        publicPath: '/',
        filename: isProd ? 'js/[name].js' : '[name].js',
        pathinfo: false
    },
    resolve: {
        unsafeCache: !isTest,
        modules: [
            root(),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.html'],
        symlinks: false,
        alias: {
            src: resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                loader: 'ts-loader',
                exclude: [/\.spec\.ts[x]?$/],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|mp3|mp4)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]?'
                    }
                }]
            },
            {
                test: /\.html$/,
                include: resolve(__dirname, 'src', 'index.html'),
                use: {
                    loader: 'raw-loader'
                }
            },
        ]
    },
    stats: 'none',
    plugins: [
        // new ForkTsCheckerWebpackPlugin(),
        // new DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
        //     }
        // }),
        // new LoaderOptionsPlugin({
        //     debug: !isProd || !isTest
        // }),
        !isTest && new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // !isTest && new PreloadWebpackPlugin({
        //     rel: 'prefetch',
        //     include: 'allAssets',
        //     fileWhitelist: [/.+\.(png|jpe?g|gif|svg)/]
        // }),
        // !isProd && new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     cwd: process.cwd()
        // }),
        // isProd && new LoaderOptionsPlugin({
        //     minimize: true
        // })
    ].filter(p => !!p),
    externals: {
        fs: 'fs',
        module: 'module'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8090
    },
};

export default config;
