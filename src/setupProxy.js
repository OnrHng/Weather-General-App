const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://onrhng.github.io/Weather/',
      changeOrigin: true,
    })
  );
};