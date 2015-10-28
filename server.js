var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(process.env.PORT || 5000, function (err) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
