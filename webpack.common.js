const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("node:path");

const environment = process.env.NODE_ENV === "development" ? "target" : "dist";

module.exports = {
  entry: {
    Hexagon: "./src/HexagonField.js",
  },

  output: {
    filename: "hexagon.min.js",
    library: "Hexagon",
    libraryTarget: "var",
    libraryExport: "HexagonField",
    path: path.resolve(
      __dirname,
      process.env.NODE_ENV === "development" ? "target" : "dist"
    ),
    hotUpdateChunkFilename: `${environment}/tmp/hot-update.js`,
    hotUpdateMainFilename: `${environment}/tmp/hot-update.json`,
  },

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  optimization: {
    // minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },

  plugins: [new MiniCssExtractPlugin({ filename: "hexagon.min.css" })],
};
