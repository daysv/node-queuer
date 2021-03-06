module.exports = {
    entry: {
        dist: './index.js'
    },
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015'],
                plugins: [
                    "add-module-exports"
                ]
            }
        }],
    },
    output: {
        path: './',
        filename: 'dist.js',
        libraryTarget: 'commonjs2'
    }
}