// bundle css terpisah
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// panggil config utama
const config = require("./webpack.config");
// tools webpack-merge
const { merge } = require("webpack-merge");
// bundle html
const path = require("path");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "img/[name]-[hash][ext]",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "bundle.[contenthash].css" })],
});
