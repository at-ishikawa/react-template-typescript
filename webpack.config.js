const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = (env, argv) => {

  const isProduction = argv.mode === 'production';
  let environment = 'development';
  if (isProduction) {
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
    new ForkTsCheckerWebpackPlugin({
      tslint: true
    }),
    new CaseSensitivePathsPlugin()
  ];


  if (isProduction) {
    cssLoader.loader = 'css-loader';

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

  return {
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
    plugins
  };
};
