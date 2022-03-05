<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <router-link to="/"></router-link>
      </div>
      <div class="title fl">
        <h2>{{ title }}<span>{{ tips }}</span></h2>
      </div>
      <div class="username fr">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'OrderHeader',
  props: ['title', 'tips'],
  computed: {
    ...mapState(['username'])
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';

  .order-header {
    padding: 30px 0;
    border-bottom: 2px solid $colorA;

    .title, .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }

    .title {
      margin-left:54px;

      h2 {
        font-size: $fontC;
        color: $colorB;
      }

      span {
        font-size: $fontJ;
        margin-left: 17px;
        color: $colorD;
        font-weight: 200;
      }
    }
    .username {
      a {
        color: $colorC;
        font-size: $fontI;
      }
    }
  }
</style>