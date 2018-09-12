/**
 * vue编译配置
 */
let config = {
  dev: { // 开发
    hash: false,
    baseUrl: '/',
    outputDir: 'dist'
  },
  test: { // 测试
    hash: false,
    baseUrl: '',
    outputDir: 'dist/test'
  },
  online: { // 线上
    hash: true,
    baseUrl: '',
    outputDir: 'dist/online'
  }
}

module.exports = config
