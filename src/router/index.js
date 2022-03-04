import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'

// 使用Router插件
Vue.use(Router)

// 导出Router
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../pages/Home.vue'),
        },
        {
          path: '/product/:id',
          component: () => import('../pages/Product.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../pages/Login.vue'),
    }
  ]
})