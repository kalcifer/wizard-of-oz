/* jshint node: true */
var path = require('path');
var fs = require('fs');
var exampleDir = path.join(__dirname, 'examples')
var entries = fs.readdirSync(exampleDir).reduce(function (entries, dir) {
                  if (fs.statSync(path.join(exampleDir,  dir)).isDirectory())
                    entries[dir] = path.join(exampleDir, dir, 'src','index.js')

                  return entries
                },{})

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname),
  entry: entries,

  output: {
    path: path.join(__dirname + '__examples__'),
    filename: '[name].js',
    publicPath:'examples'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  }
};
