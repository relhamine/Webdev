module.exports = {
    cache: true,
    entry: {
        main: './app.js'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(ico|jpe?g|png|gif)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    "file?name=[path][name].[ext]&context=./lola"
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
}
;