<template>
  <router-view />
</template>

<script>
import { request } from './utils'

export default {
  name: 'App',
  methods: {
    async getCartCount(){
      // 由于获取购物车数量的接口有问题，用这个
      const res = await request.delete(`/carts/1`)
      console.log(res)
      const total = res.cartProductVoList?.length || 0
      this.$store.dispatch('saveCartCount', total)
    },
    getUser(){
      return JSON.parse(localStorage.getItem('user'))
    },

  },
  mounted(){
    const user = this.getUser()
    if(user){
      this.$store.dispatch('saveUserName', user.username)
      this.getCartCount()
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/base.scss';
</style>
