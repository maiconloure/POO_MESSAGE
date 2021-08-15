const path = require('path')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',

  devtool: 'cheap-module-source-map',

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      allowEmptyValues: false
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'public/views', 'index.html')
    })
  ],

  module: {
    rules:
   [{
     test: /\.ts(x?)$/,
     exclude: /node_modules/,
     use: [
       { loader: 'ts-loader' }
     ]
   }]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsConfigPathsPlugin()]
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  performance: {
    hints: false
  },

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: false
  }
}
