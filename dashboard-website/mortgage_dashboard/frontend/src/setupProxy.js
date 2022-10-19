
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/accounts',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_API_URL}/accounts`,
      changeOrigin: true,
    })
  );
};