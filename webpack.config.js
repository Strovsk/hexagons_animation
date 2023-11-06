const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    Hexagon: "./src/HexagonField.js",
  },

  output: {
    filename: "Hexagon.js",
    library: "Hexagon",
    libraryTarget: "var",
    libraryExport: "default",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new HtmlWebpackPlugin({ template: "./dist/index.html" })],

  devServer: {
    compress: true,
    port: 5000,
  },
};
