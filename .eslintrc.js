module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',  //是否禁止console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', //是否禁止debugger
    'handle-callback-err':'off',//是否必须进行错误处理
    'prefer-promise-reject-errors':'off',//Promise reject 是否必须是Error类型
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
