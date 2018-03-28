// Requirements:
// - entry point
// - output for file

const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    // entry: './src/playground/hoc.js',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'), // must be an absolute path for machine
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
