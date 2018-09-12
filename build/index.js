const config = require('./config')

let FE_ENV = process.env.FE_ENV || 'test'

if (process.env.NODE_ENV === 'development') {
  FE_ENV = 'dev'
}
// 直接配置webpack
let webpackConfig = {

}

module.exports = {
  hash: config[FE_ENV].hash,
  outputDir: config[FE_ENV].outputDir,
  baseUrl: config[FE_ENV].baseUrl,
  webpackConfig
}
