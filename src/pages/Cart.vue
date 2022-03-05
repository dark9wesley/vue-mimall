<template>
  <div class="cart">
    <OrderHeader title="我的购物车" tips="温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算" />
    Cart
    <NavFooter />
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'Cart',
  components: {
    OrderHeader, 
    NavFooter,
  }
}
</script>
<style lang="scss">
  
</style>