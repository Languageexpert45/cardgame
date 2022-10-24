/* eslint-disable prettier/prettier */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const mode =
 process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
 entry: "./src/main.ts",
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "bundle.js",
  clean: true,
 },
 mode,
 module: {
  rules: [
   {
    test: /\.ts$/,
    use: "ts-loader",
    exclude: /node_modules/,
   },

   {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
   },
   {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
   },
  ],
 },
 resolve: {
  extensions: [".ts", ".js"],
 },
 optimization: {
  minimizer: ["...", new CssMinimizerPlugin()],
 },
 devtool: process.env.NODE_ENV === "production" ? false : "source-map",

 plugins: [
  new CopyPlugin({
   patterns: [{ from: "./src/static", to: "static" }],
  }),
  new HtmlWebpackPlugin({
   template: "./src/card-game.html",
  }),
  new MiniCssExtractPlugin(),
 ],
}
