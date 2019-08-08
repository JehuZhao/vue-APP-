const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config)=> {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}