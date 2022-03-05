<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <router-link v-else to="/login">登录</router-link>
          <a href="javascript:;">我的订单</a>
          <router-link to="/cart" class="my-cart"><span class="icon-cart" />购物车 <span>{{ cartCount || '' }}</span></router-link>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/" />
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <ul class="children">
              <li class="product" v-for="item in dataList" :key="item.id">
                <router-link :to="/product/ + item.id">
                  <img class="pro-img" v-lazy="item.mainImage" />
                  <div class="pro-name">
                    {{ item.name }}
                  </div>
                  <div class="pro-price">
                    {{item.price}}元
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <ul class="children">
              <li class="product" v-for="d in tvData" :key="d.name">
                <router-link to="">
                  <img class="pro-img" v-lazy="`/imgs/nav-img/${d.imgName}`" />
                  <div class="pro-name">
                    {{ d.name }}
                  </div>
                  <div class="pro-price">
                    {{ d.price }}
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { request } from '../utils'

export default {
  name: 'NavHeader',
  data(){
    return {
      dataList: [],
      tvData: [
        {
          imgName: 'nav-3-1.jpg',
          name: '小米壁画电视 65英寸',
          price: '6999元'
        },
        {
          imgName: 'nav-3-2.jpg',
          name: '小米全面屏电视E55A',
          price: '1999元'
        },
        {
          imgName: 'nav-3-3.png',
          name: '小米电视4A 32英寸',
          price: '6999元'
        },
        {
          imgName: 'nav-3-4.jpg',
          name: '小米电视4A 55英寸',
          price: '1799元'
        },
        {
          imgName: 'nav-3-5.jpg',
          name: '小米电视4A 65英寸',
          price: '2699元'
        },
        {
          imgName: 'nav-3-6.png',
          name: '查看全部',
          price: '查看全部'
        },
      ]
    }
  },
  computed: {
    ...mapState(['username', 'cartCount'])
  }, 
  methods: {
    async getProductList(){
      const res = await request.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      })
      this.dataList = res.list
    }
  },
  mounted(){
    this.getProductList()
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .header {
    .nav-topbar {
      height: $fontB;
      line-height: $fontB;
      background-color: $colorB;

      .container {
        @include flex();

        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }

        .my-cart {
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          margin-right: 0;

          .icon-cart {
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }

    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();

        .header-logo {
          width: 55px;
          height: 55px;
          background: $colorA;
          overflow: hidden;

          a {
            display: inline-block;
            width: 110px;
            height: 55px;

            &:before {
              content: '';
              @include bgImg(55px, 55px, '/imgs/mi-logo.png');
              transition: margin .2s;
            }
            &:after {
              content: '';
              @include bgImg(55px, 55px, '/imgs/mi-home.png');
            }

            &:hover:before {
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }

        .header-menu {
          width: 643px;
          display: flex;
          padding-left: 210px;

          .item-menu {
            color: $colorB;
            font-weight: bold;
            font-size: $fontI;
            line-height: 112px;
            margin-right: 20px;

            span {
              cursor: pointer;

              &:hover {
                color: $colorA;
              }
            }

            &:hover {
              .children {
                height: 220px;
                opacity: 1;
              }
            }

            .children {
              position: absolute;
              top: 112px;
              left: 0px;
              width: 1226px;
              height: 0px;
              opacity: 0;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              display: flex;
              overflow: hidden;
              transition: all .5s;
              background: $colorG;

              .product {
                width: 16.6%;
                height: 220px;
                font-size: $fontK;
                line-height: 12px;
                text-align: center;
                position: relative;

                &:after {
                  content: '';
                  display: inline-block;
                  width: 1px;
                  height: 110px;
                  background: $colorF;
                  position: absolute;
                  right: 0;
                  top: 28px;
                }

                &:last-child:after {
                  display: none;
                }

                a {
                  display: inline-block;
                }

                .pro-img {
                  display: inline-block;
                  width: auto;
                  height: 110px;
                  margin-top:26px;
                }

                .pro-name {
                  font-weight: bold;
                  margin-top: 13px;
                  margin-bottom: 8px;
                  color: $colorB;
                }

                .pro-price {
                  color: $colorA;
                }

              }
            }
          }
        }

        .header-search {
          width: 320px;
          
          .wrapper {
            height: 50px;
            border: 1px solid $colorH;
            display: flex;
            align-items: center;

            input {
              border: none;
              border-right: 1px solid $colorH;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              box-sizing: border-box;
            }

            a{
              @include bgImg(18px, 18px, '/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>