<template>
  <div class="nav-bar" :class="{isFixed}">
    <div class="container">
      <div class="pro-title">
        {{ title }}
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
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  data(){
    return {
      isFixed: false
    }
  },
  methods: {
    initScroll(){
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.isFixed = top > 160
    }
  },
  mounted(){
    window.addEventListener('scroll', this.initScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.initScroll)
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .nav-bar {
    height: 70px;
    line-height: 70px;
    background-color: $colorG;
    z-index: 10;

    &.isFixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }

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