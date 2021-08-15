const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/public/js/')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsConfigPathsPlugin()]
  },

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

  plugins: [
    new Dotenv({ allowEmptyValues: false })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
