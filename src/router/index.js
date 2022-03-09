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
        },
        {
          path: '/detail/:id',
          component: () => import('../pages/Detail.vue'),
        },
      ]
    },
    {
      path: '/cart',
      component: () => import('../pages/Cart.vue'),
    },
    {
      path: '/login',
      component: () => import('../pages/Login.vue'),
    },
    
    {
      path: '/order',
      component: () => import('../pages/Order/index.vue'),
      redirect: '/order/list',
      children: [
        {
          path: 'list',
          component: () => import('../pages/Order/OrderList.vue')
        },
        {
          path: 'confirm',
          component: () => import('../pages/Order/OrderConfirm.vue')
        },
        {
          path: 'pay',
          component: () => import('../pages/Order/OrderPay.vue')
        },
        {
          path: 'alipay',
          component: () => import('../pages/Order/alipay.vue')
        }
      ]
    },
  ]
})