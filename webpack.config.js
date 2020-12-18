module.exports = { 
    entry: './src/index.js',
    output: {
        filename: "index_bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist"
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
            test: /\.s[ac].ss$/i,
            use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    devServer: {
        publicPath: "/assets/",
        contentBase: path.resolve(__dirname, "./public"),
        watchContentBase: true
    },
    plugins: [new HtmlWebpackPlugin()]
}