let mock = require('./mock/index')
let buildConfig = require('./build')

module.exports = {
  baseUrl: buildConfig.baseUrl,
  productionSourceMap: false, // 线上环境的sourcemap
  filenameHashing: buildConfig.hash, // 测试不需要hash，线上用hash
  outputDir: buildConfig.outputDir, // 输出目录
  devServer: {
    // proxy: { //代理设置
    //   '/api': {
    //     target: 'http://localhost:8080'
    //   }
    // },
    before: function (app) {
      mock(app)// mock处理
    }
  },
  configureWebpack: {// webpack配置
    ...buildConfig.webpackConfig,
    optimization: {
      runtimeChunk: {// 提取出manifest文件
        name: 'manifest'
      }
    }
  }
}
