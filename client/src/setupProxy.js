const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("/api/*", {
        target: 'http://localhost:5000/api' || `${process.env.HOST}:${process.env.PORT}`,
        secure: false,
        changeOrigin: true
    }));

    // app.use(createProxyMiddleware("ws://localhost:8900/*", {
    //     target: "ws://localhost:8900",
    //     secure: false,
    //     changeOrigin: true
    // }));
};