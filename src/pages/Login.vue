<template>
  <div class="login">
    <div class="container">
      <router-link to="/"><img src="/imgs/login-logo.png" alt=""></router-link>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span @click="noComplete">扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="noComplete">手机短信登录/注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
     <div class="footer-link">
        <a href="https://github.com/pengyw97">wesley主页</a><span>|</span>
        <a href="https://github.com/pengyw97/vue-mimall">VUE小米商城实战</a>
      </div>
      <div class="copyright">Copyright ©2022 All Rights Reserved.</div>
    </div>
  </div>
</template>
<script>
import { request } from '../utils'

export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(){
      let { username, password } = this
      const res = await request.post('/user/login', {
        username, 
        password 
      })
      // TODO 引入vuex保存用户名

      this.$cookie.set('userId', res.id, { expires: 'Session' })
      this.$router.push({ path: '/home', params: { from: '/login' }})
    },
    async noComplete(){
      alert('暂未实现！')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .login{
    & > .container{
      height: 113px;
      img{
        width: auto;
        height: 100%;
      }
    }

    .wrapper{
      @include bgImg(100%, 100%, '/imgs/login-bg.jpg', cover);

      .container{
        height:576px;
        position: relative;

        .login-form{
          box-sizing: border-box;
          padding-left: 31px;
          padding-right: 31px;
          width: 410px;
          height: 510px;
          background-color: $colorG;
          position: absolute;
          bottom: 29px;
          right: 0;

          h3{
            line-height: 23px;
            font-size: 24px;
            text-align: center;
            margin: 40px auto 49px;

            .checked{
              color: $colorA;
            }

            .sep-line{
              margin: 0 32px;
            }
          }

          .input{
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #E5E5E5;
            margin-bottom: 20px;
            overflow: hidden;

            input{
              width: 100%;
              height: 100%;
              border: none;
              padding: 18px;
              box-sizing: border-box;
            }
          }

          .btn{
            width: 100%;
            line-height: 50px;
            margin-top: 10px;
            font-size: $fontI;
          }
          .tips{
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            font-size: $fontI;
            cursor: pointer;

            .sms{
              color: $colorA;
            }
            .reg{
              color: $colorD;

              span{
                margin: 0 7px;
              }
            }
          }
        }
      }
    }

    .footer{
      height: 100px;
      padding-top: 60px;
      color: $colorD;
      font-size: $fontI;
      text-align: center;

      .footer-link{
        a{
          color: $colorD;
          display:inline-block;
        }
        span{
          margin:0 10px;
        }
      }
      .copyright{
        margin-top:13px;
      }
    }
  }
</style>