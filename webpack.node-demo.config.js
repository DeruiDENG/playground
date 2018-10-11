const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/demos/demo.ts',
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
    },

    // Enable sourcemaps for debugging webpack's output.
    target: 'node',
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
    ],
};
