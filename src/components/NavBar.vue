<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a>概述</a><span>｜</span>
        <a>参数</a><span>｜</span>
        <a>用户评价</a><span></span>
        <slot name='buy'/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .nav-bar {
    height: 70px;
    line-height: 70px;

    .container {
      @include flex()
    }

    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: 500;
    }

    .pro-param {
      font-size: $fontJ;
      color: $colorC;
      cursor: pointer;

      span {
        margin: 0 10px
      }
    }
  }
</style>