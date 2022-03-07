import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: '/api',
  timeout: 8 * 1000,
})

// request.interceptors.request.use(() => {
//   // 请求拦截
// }, error => {
//   return Promise.reject(error)
// })

request.interceptors.response.use((response) => {
  // 响应拦截
  const res = response.data
  const path = window.location.pathname
  if(res.status === 0){
    return res.data
  } else if(res.status === 10){
    if(path !== '/home' && path !== '/login'){
      window.location.href = '/login'
      Message.warning(res.msg)
      return Promise.reject(res.msg)
    }
  } else {
    Message.warning(res.msg)
    return Promise.reject(res.msg)
  }
}, error => {
  return Promise.reject(error)
})

export default request
