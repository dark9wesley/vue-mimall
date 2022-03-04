<template>
  <div class="detail">
    <NavBar>
      <template v-slot:buy>
        <div class="btn">
          111
        </div>
      </template>
    </NavBar>
    Detail
  </div>
</template>
<script>
import NavBar from '../components/NavBar'

export default {
  name: 'Product',
  components: {NavBar}
}
</script>
<style lang="scss" scoped>
  
</style>