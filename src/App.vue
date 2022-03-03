<template>
  <router-view />
</template>

<script>
import { request } from './utils'

export default {
  name: 'App',
  methods: {
    async getUser(){
      await request.get('/user')

      //todo 保存在VUEX
    },
    async getCartCount(){
      await request.get('/carts/products/sum')

      //todo 保存在VUEX
    }
  },
  mounted(){
    this.getUser()
    this.getCartCount()
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/base.scss';
</style>
