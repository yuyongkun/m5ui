const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        m5ui: './src/index.js'
    },
    devtool:'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "esmodules": true
                                    },
                                    modules:false
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            },
            {
                test: /\.css$/,
                // use:['style-loader','css-loader'],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']

            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin('[name].css'),
    ]
};