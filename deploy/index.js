/**
 * 发布
 */
const path = require('path')
const fs = require('vinyl-fs')
const Ftp = require('vinyl-ftp')
const inquirer = require('inquirer')
var colors = require('colors')
const config = require('./config')
const buildConfig = require('../build')

let FE_ENV = process.env.FE_ENV || 'test'

const promptList = [
  // 具体交互内容
  {
    type: 'input',
    message: `将要部署到环境 `.red+`${FE_ENV}`.yellow+` ,请三思而后行，是否部署?`.red,
    name: 'deploy',
    default: 'no' // 默认值
  }
]

let conn = new Ftp({
  host: config[FE_ENV].host,
  port: config[FE_ENV].port,
  user: config[FE_ENV].username,
  password: config[FE_ENV].password,
  parallel: 2,
  log: console.log
})

inquirer.prompt(promptList).then(answers => {
  // console.log(answers) // 返回的结果
  if (answers.deploy === 'yes') {
    let hasError = false
    console.log('===================开始部署...==================='.green)

    let stream = fs.src(buildConfig.outputDir + '/**', { buffer: false })
      .pipe(conn.dest(config[FE_ENV].baseDir))

    stream.on('end', (res) => {
      if (!hasError) {
        console.log('===================部署完成...==================='.green)
      }
    })

    stream.on('error', (err) => {
      hasError = true
      console.log('===================部署失败...==================='.red)
      console.log(`${err}`.red)
    })
  } else {
    console.log('===================取消部署...==================='.yellow)
  }
})
