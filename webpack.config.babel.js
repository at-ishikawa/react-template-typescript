import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let environment = 'development';
if (process.env.NODE_ENV === 'production') {
  environment = 'production';
}

const srcDir = '/src';
const distDir = '/dist';

let devtool = '#cheap-source-map';
let cache = false;
let cssLoader = "css-loader?importLoaders=1&modules";

const plugins =  [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(environment)
    }
  })
];


if (environment === 'production') {
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
  cssLoader += "&sourceMap&localIdentName=[name]--[local]--[hash:base64]";
}

plugins.push(new HtmlWebpackPlugin());
plugins.push(new ExtractTextPlugin("[name]--[contenthash:base64].css"));

let configs = {
  devtool: devtool,
  cache: cache,
  entry: {
    application: path.join(__dirname, srcDir + '/js/application.jsx')
  },
  output: {
    path: path.join(__dirname, distDir + '/js'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css'
    ],
    modules: [
      "node_modules",
      path.join(__dirname, srcDir + '/js'),
      path.join(__dirname, srcDir + '/jsx'),
      path.join(__dirname, srcDir + '/css')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            'postcss-loader'
          ],
        }),
      }
    ]
  },
  externals: {
    'Env': JSON.stringify(require('./.env.' + environment + '.json'))
  },
  plugins: plugins
};

export default configs;
