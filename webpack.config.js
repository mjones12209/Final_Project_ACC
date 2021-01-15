const path = require('path');
const { NoEmitOnErrorsPlugin } = require('webpack');

module.exports = { 
    mode: "development",
    devtool: false,
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname, "dist"),
        publicPath: path.resolve(__dirname, "public"),
        filename: "index_bundle.js",        
    },
    module: {
        rules: [
            { 
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                 }
                }
            }, 
            {
            test: /\.css$/i,
            use: ["style-loader","css-loader"]
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        compress: true,
        port: 5992,
        open:true
    },
}