const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [ './library' ],
  output: {
    path: path.join(__dirname, 'dll'),
    filename: 'dll.js',
    library: 'dll_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', "dll-manifest.json"),
      name: 'dll_[hash]'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
}
