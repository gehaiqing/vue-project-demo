/**
 * axios的封装
 * 提供给service调用
 */
import axios, { AxiosInstance } from 'axios'

let server = ''
if (process.env.NODE_ENV === 'production') {
  server = ''
} else {
  server = ''
}

let http = axios.create({
  baseURL: server,
  timeout: 5000
})

// 返回拦截处理
http.interceptors.response.use((res) => {
  return res.data
}, error => {
  console.error('http error ', error)
  return Promise.reject('http error')
})

/**
 * get 请求
 * @param url 请求地址，不含域名。
 * @param params 请求参数
 */
export function get (url:string, params:object) {
  return http.get(url, {
    params
  })
}

/**
 * post 请求
 * @param url 请求地址，不含域名
 * @param params 请求参数
 */
export function post (url:string, params:object) {
  return http.post(url, {
    params
  })
}

// vue 安装
export default {
  install (Vue:any, options:object) {
    Vue.prototype.$http = http
  }
}
