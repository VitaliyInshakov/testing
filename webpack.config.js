module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ["react-hot-loader/webpack", "babel-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}