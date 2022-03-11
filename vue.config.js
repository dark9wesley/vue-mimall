module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy:{
      '/api':{
        target:'http://mi.futurefe.com',
        changeOrigin:true,
      }
    }
  },
  // publicPath: '/dist',
  // productionSourceMap: false,
  // 防止预加载资源
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
