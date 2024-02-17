const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");

process.env.NODE_ENV = "development";
const common = require("./webpack.common");

console.log("✨ Welcome to Hexagons dev server.\n");
console.log("- If you want to exit, press Ctrl+C.");
console.log("\n");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      watch: true,
    },
    compress: true,
    port: 5000,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/hexagons.ico", to: "." },
        { from: "public/index.html", to: "." },
      ],
    }),
  ],

  // watch: true,
});
