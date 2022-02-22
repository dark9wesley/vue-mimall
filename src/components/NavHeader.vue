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
          <a href="javascript:;">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart" />购物车</a>
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
              <li class="product">
                <a href="javascript:;" target="_blank">
                  <img class="pro-img" src="https://img1.360buyimg.com/n2/jfs/t1/197568/30/19848/72144/61b01d3aEcb5cb12e/ca75af12986a1aa9.jpg" />
                  <div class="pro-name">
                    小米CC9
                  </div>
                  <div class="pro-price">
                    1799元
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <ul class="children"></ul>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <ul class="children"></ul>
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
export default {
  name: 'NavHeader',
}
</script>
<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;

      .container {
        @include flex();

        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }

        .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;

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
          background: #FF6600;
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
            color: #333333;
            font-weight: bold;
            font-size: 16px;
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
              transition: all .2s;

              .product {
                width: 16.6%;
                height: 220px;
                font-size: 12px;
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
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;

            input {
              border: none;
              border-right: 1px solid #E0E0E0;
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