<template>
  <div class="app">
    <NavHeader />
    <div class="main">
      <router-view />
    </div>
    <NavFooter />
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'Index',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
<style lang="scss" scoped>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1;
  }
</style>