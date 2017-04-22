const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./main.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  context: __dirname + "/lib",

  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: [
          { loader: "atomic-loader" },
          { loader: "babel-loader" },
          { loader: "awesome-typescript-loader" },
        ],
        include: __dirname + "/lib"
      }, 

      {
        test: /\.scss$/,
        loaders: ["style-loader","css-loader","sass-loader"]
      },

    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
