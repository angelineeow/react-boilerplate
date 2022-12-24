const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//source-map
//html plugin
//babel loader
//css loader
//dev server
module.exports = {
  module: {
    rules: [
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ]
            }
        }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"], // order matters here
        },
    ]
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'bundled'),
    filename: 'index.js',
  },
  mode:"production", //production mode, size is smaller
  devtool: "source-map",
  plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      })
  ],
  devServer: {
    client: {
        overlay: {
            warnings: false,
        },
    },
    // static: {
    //   directory: path.join(__dirname, 'bundled'), // where to bind the bundled file
    // },
    compress: true, // compress the bundled file before sending it to the browser
    port: 9000,
  },
};
