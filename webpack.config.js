const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


let environment = 'development';
if (process.env.NODE_ENV === 'production') {
  environment = 'production';
}

const srcDir = '/src';
const distDir = '/dist';

let devtool = '#cheap-source-map';
let cache = false;
let cssLoader = {
  options: {
    importLoaders: 1,
    modules: true,
    camelCase: true
  }
};

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'src/html/index.html',
  hash: true,
});
const plugins =  [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(environment)
    }
  }),
  new ForkTsCheckerWebpackPlugin({
    tslint: true
  }),
  new CaseSensitivePathsPlugin()
];


if (environment === 'production') {
  cssLoader.loader = 'css-loader';
  cssLoader.options.minimize = true;

  htmlPlugin.minify = {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  };
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    comments: false,
    compress: {
      warnings: true
    }
  }));
} else {
  devtool = 'inline-source-map';
  cache = true;

  cssLoader.loader = 'typings-for-css-modules-loader';
  cssLoader.options.namedExport = true;
  cssLoader.options.sourceMap = true;
  cssLoader.options.localIdentName = "[path][name]--[local]--[hash:base64:8]";

  plugins.push(new webpack.WatchIgnorePlugin([
    /css\.d\.ts$/
  ]));
}

plugins.push(htmlPlugin);

let configs = {
  devtool: devtool,
  cache: cache,
  entry: {
    application: path.join(__dirname, srcDir + '/js/Application.tsx')
  },
  output: {
    path: path.join(__dirname, distDir),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.css'
    ],
    modules: [
      "node_modules"
    ]
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          cssLoader,
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  externals: {
    'Env': JSON.stringify(require('./.env.' + environment + '.json')),
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  plugins: plugins
};

module.exports = configs;
