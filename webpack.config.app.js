const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [ './app' ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app_[chunkhash].js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/dll-manifest.json')
    })
  ]
}
