const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config)=> {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {          //vue cli3在本地配置json数据
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}