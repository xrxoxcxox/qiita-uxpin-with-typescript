const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.tsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        loader: ['babel-loader', 'ts-loader'],
        test: /\.tsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            },
          },
        ],
      },
    ]
  }
}
