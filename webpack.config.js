const path = require("path");

module.exports = {
  mode: "production",
  output: {
    filename: "index.min.js",
    path: path.resolve(__dirname)
  }
};
