// Imports: Dependencies
const path = require('path');
require("@babel/register");
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');

// Webpack Configuration
const config = {
  // Entry
  entry: { main: './react-client/src/index.jsx'},
  // Output
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // Plugins
  plugins: [],

  // OPTIONAL
  // Reload On File Change
  watch: true,
};

  // Exports
module.exports = config;


// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/react-client/src');
// var DIST_DIR = path.join(__dirname, '/react-client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   resolve: {
//     modules: [__dirname, 'node_modules'],
//     extensions: ['*','.js','.jsx', '.css']
//   },
//   module: {
//     rules : [
//       // JavaScript/JSX Files
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       // CSS Files
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       }
//     ]
//   }
// };


// ,
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       }

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   resolve: {
//     modules: [__dirname, 'node_modules'],
//     extensions: ['*','.js','.jsx', '.css']
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR,
//         loader : 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//        }
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader!css-loader"
//       },
//     ]
//   },
// };