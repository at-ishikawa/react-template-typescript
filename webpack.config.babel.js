import path from 'path';
import webpack from 'webpack';

var environment = 'development';
if (process.env.NODE_ENV == 'production') {
  environment = 'production';
}

const srcDir = '/src';
const distDir = '/dist';

let devtool = '#cheap-source-map';
let cache = false;
let cssLoader = "css?importLoaders=1&modules";

const plugins =  [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(environment)
    }
  })
];


if (environment == 'production') {
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

let configs = {
  devtool: devtool,
  cache: cache,
  entry: {
    application: path.join(__dirname, srcDir + '/js/application.js')
  },
  output: {
    path: path.join(__dirname, distDir + '/js'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css'
    ],
    root: [
      path.join(__dirname, srcDir + '/js'),
      path.join(__dirname, srcDir + '/css')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [
            "react",
            "es2015",
            "stage-0"
          ]
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          cssLoader,
          'postcss'
        ]
      }
    ]
  },
  externals: {
    'Env': JSON.stringify(require('./.env.' + environment + '.json'))
  },
  plugins: plugins
};

export default configs;
