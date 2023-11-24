const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");

process.env.NODE_ENV = "production";

const common = require("./webpack.common.js");

console.log("✨ Welcome to Hexagons\n");
console.log("The compilation is running.\n");

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/hexagons.ico", to: "." },
        { from: "public/index.html", to: "." },
      ],
    }),
  ],
});
