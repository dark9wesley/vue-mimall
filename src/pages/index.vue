<template>
  <div>
    <NavHeader />
    <router-view />
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader.vue'

export default {
  name: 'Index',
  components: {
    NavHeader
  }
}
</script>
<style>
  
</style>