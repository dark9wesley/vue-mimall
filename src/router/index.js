import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'

// 使用Router插件
Vue.use(Router)

// 导出Router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }
  ]
})