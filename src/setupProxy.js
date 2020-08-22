
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/trainingApi/',
    createProxyMiddleware({
      target: 'http://localhost:8083',
      changeOrigin: true,
      secure: false
    })
  ),
  app.use(
    '/mockapi/',
    createProxyMiddleware({
      target: '  https://5c06b0f9c16e120013947a9b.mockapi.io',
      changeOrigin: true,
      secure: false
    })
  ),
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://localhost:8627',
      changeOrigin: true,
      secure: false
    })
  );
};