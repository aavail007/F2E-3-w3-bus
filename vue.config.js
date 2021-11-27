module.exports = {
  // build輸出目錄
  outputDir: 'bus',

  // 靜態資源目錄（js, css, img）
  assetsDir: 'assets',

  // 是否開啟eslint
  lintOnSave: false,

  publicPath: './',
  // publicPath: '/WebAgenda/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    open: true, // 是否自動彈出瀏覽器頁面
    host: 'localhost',
    // host: '192.168.3.100', // 開發用
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/': {
        target: 'https://tdx.transportdata.tw',
        ws: true, // 代理 websockets
        secure: true,
        changeOrigin: true // 虛擬的站點需要更管origin //是否跨域
      }
    }
  },
  css: {},
  configureWebpack: {}
};
