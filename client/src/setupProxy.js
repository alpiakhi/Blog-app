const { api_url } = require('./config');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("/api/*", {
        target: api_url || `${process.env.HOST}:${process.env.PORT}`,
        secure: false,
        changeOrigin: true
    }));

    // app.use(createProxyMiddleware("ws://localhost:8900/*", {
    //     target: "ws://localhost:8900",
    //     secure: false,
    //     changeOrigin: true
    // }));
};