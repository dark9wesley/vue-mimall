<template>
  <div class="footer">
    <div class="footer-logo">
      <img v-lazy="'/imgs/logo-footer.png'" />
    </div>
    <div class="footer-link">
      <a href="https://github.com/pengyw97">wesley主页</a><span>|</span>
      <a href="https://github.com/pengyw97/vue-mimall">VUE小米商城实战</a>
    </div>
    <div class="copyright">Copyright ©2022 All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'NavFooter'
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';

  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;

    .footer-logo {
      margin-top: 46px;
      margin-bottom: 30px;

      img {
        width: 53px;
        height: 36px;
      }
    }

    .footer-link {
      a {
        color: $colorD;
        display: inline-block;
      }

      span{
        margin:0 10px;
      }

      margin-bottom: 16px;
    }

    .copyright{
      .domain{
        color: $colorA;
      }
    }
  }
</style>