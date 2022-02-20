import axios from 'axios'

const request = axios.create({
  // baseURL: 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall',
  baseURL: '/api',
  timeout: 8 * 1000,
})

request.interceptors.request.use(() => {
  // 请求拦截
}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use((response) => {
  // 响应拦截
  return response
}, error => {
  return Promise.reject(error)
})

export default request
