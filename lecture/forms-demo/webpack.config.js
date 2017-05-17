module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname,
    filename: './browser/bundle.js'
  },
  context: __dirname,
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
