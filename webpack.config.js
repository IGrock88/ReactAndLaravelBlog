const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/app', 'index.js'),
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'index.js',
        library: 'lib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]"
            }
        ]
    }

};