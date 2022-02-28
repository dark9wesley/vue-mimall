import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import lazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(lazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
