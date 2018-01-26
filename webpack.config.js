var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'svyte.js',
    library: 'svyte',
    libraryTarget: 'umd'
  }
};