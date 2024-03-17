const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: "./source/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: resolve(__dirname, "..", "server", "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./source/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
