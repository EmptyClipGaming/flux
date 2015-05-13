module.exports = {
  entry: "./application/core.jsx",
  output: {
    path: __dirname + "/public/javascripts",
    publicPath: "/javascripts/",
    filename: "site.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel"},
      { test:/\.js$/, loader: "babel", exclude: /node_modules/},
      { test:/\.json$/, loader: "json-loader"}
    ]
  },
  plugins: []
};
