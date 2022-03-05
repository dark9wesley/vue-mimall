<template>
  <router-view />
</template>

<script>
import { request } from './utils'

export default {
  name: 'App',
  methods: {
    async getCartCount(){
      await request.get('/carts/products/sum')

      //TODO 保存在VUEX
    },
    getUser(){
      return JSON.parse(localStorage.getItem('user'))
    },

  },
  mounted(){
    const user = this.getUser()
    if(user){
      this.$store.dispatch('saveUserName', user.username)
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/base.scss';
</style>
