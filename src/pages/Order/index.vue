<template>
  <div>
    <OrderHeader :title="title"/>
    <router-view></router-view>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import OrderHeader from '../../components/OrderHeader'
import NavFooter from '../../components/NavFooter'
import ServiceBar from '../../components/ServiceBar'

export default {
  name: 'Order',
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
  },
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    const path = this.$route.path
    if(path === '/order/confirm'){
      this.title = "订单确认"
    }else if(path === '/order/list'){
      this.title = "订单列表"
    }else if(path === '/order/pay'){
      this.title = "订单支付"
    }
  },
}
</script>
<style lang="scss">
  
</style>