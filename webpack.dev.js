// bundle css terpisah
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// panggil config utama
const config = require("./webpack.config");
// tools webpack-merge
const { merge } = require("webpack-merge");
// bundle html
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
    clean: true,
    // nambah hash pada file img
    assetModuleFilename: "img/[name]-[hash][ext]",
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 3000,
