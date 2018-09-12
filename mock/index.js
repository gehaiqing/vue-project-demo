/**
 * 一个接口一个文档，放在mock目录下
 * 可以放在子目录下
 *
 * 读取当前目录下的非`index.js`文件，依次遍历
 * mock的数据格式：
 * module.exports = {
 *  api: 'GET /api/test',
 *  res: {
 *    code:200,
 *    data:[],
 *    message:'success'
 * }
 */

const fs = require('fs')
const path = require('path')

const dir = __dirname
let fileList = []

/**
 * 递归读取目录
 * @param {string} url  目录路径
 */
function _getFileList (url) {
  fs.readdirSync(url).forEach((file) => {
    if (fs.statSync(path.resolve(url, file)).isDirectory()) { // 目录
      _getFileList(path.resolve(url, file))
    } else { // 文件
      if (url !== __dirname) {
        fileList.push(path.resolve(url, file))
      } else if (file !== 'index.js') {
        fileList.push(path.resolve(url, file))
      }
    }
  })
}

_getFileList(__dirname)

module.exports = function (app) {
  fileList.forEach((filename) => {
    let data = require(filename)
    let [method, apiPath] = data.api.split(' ')

    // 根据方法挂载路由
    switch (method.toLowerCase()) {
      case 'get':
        app.get(apiPath, (req, res, next) => {
          res.json(data.res)
        })
        break
      case 'post':
        app.post(apiPath, (req, res, next) => {
          res.json(data.res)
        })
        break
    }
  })
}
