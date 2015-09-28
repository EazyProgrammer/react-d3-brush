'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');
var js_dist_min = path.join(__dirname, './example/dist/min');

// 0 stands for development, 1 stands for production
// for development mode: NODE_ENV=0 webpack
// for production mode: NODE_ENV=1 webpack
var ENV = !!(+process.env.NODE_ENV || 0);

module.exports = [{
  name: 'chartComponent',
  devtool: ENV ? "source-map": '',
  entry: {
    brush_line: js_root + '/brush_line.jsx',
    brush_line_multi: js_root + '/brush_line_multi.jsx',
    brush_scatter: js_root + '/brush_scatter.jsx',
    brush_area_stack: js_root + '/brush_area_stack.jsx',
    brush_bar: js_root + '/brush_bar.jsx',
    brush_bar_group: js_root + '/brush_bar_group.jsx',
    brush_bar_stack: js_root + '/brush_bar_stack.jsx'
  },

  output: {
    path: ENV ? js_dist_min  : js_dist,
    filename: ENV ? '[name].min.js': '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: ENV ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
