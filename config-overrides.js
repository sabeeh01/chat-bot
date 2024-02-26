const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    filename: "static/js/main.chatbot.js",
    chunkFilename: "static/js/chatbot.chunk.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/en/",
  };

  config.plugins = [
    ...config.plugins,
    new MiniCssExtractPlugin({
      filename: "static/css/main.chatbot.css",
    }),
  ];

  return config;
};
