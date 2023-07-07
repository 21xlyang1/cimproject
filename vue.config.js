const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // 基本路径,相对路径
  publicPath: "./",
  // 输出文件目录
  outputDir: process.env.outputDir,//使用定义的名字
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:'./',
  outputDir: process.env.outputDir,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://45.153.131.189:5050/',
        pathRewrite:{'^/api':''},
        ws: true,
        changeOrigin: true
        
      }, 
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
