import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' 
import lazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(lazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.use(VueCookie)

Vue.prototype.$message = Message

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
