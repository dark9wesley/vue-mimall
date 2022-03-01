import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import lazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(lazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.use(VueCookie)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
