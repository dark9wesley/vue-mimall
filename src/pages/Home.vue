<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item" v-for="(m, i) in menuList" :key="i">
              <span>{{ m.name }}</span>
              <div class="children" v-if="m.children">
                <ul v-for="(item, index) in menuDataList" :key="index">
                  <li v-for="(sub) in item" :key="sub.id">
                    <router-link :to="sub ? '/product/' + sub.id : '/'" >
                      <img :src="sub ? sub.img : '/imgs/item-box-1.png'">
                      {{sub ? sub.name : '小米9'}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiperSlide v-for="p in slideList" :key="p.id">
            <router-link :to="`/product/${p.id}`"><img :src="p.img"></router-link>
          </swiperSlide>
           <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img :src="item.img">
        </a>
      </div>
      <div class="banner">
        <router-link to="/product/30">
          <img src="/imgs/banner-1.png">
        </router-link>
      </div>
    </div>
    <div class="product-box">
       <div class="container">
         <h2>手机</h2>
         <div class="wrapper">
           <div class="banner-left">
            <router-link to="/product/35">
              <img src="/imgs/mix-alpha.jpg">
            </router-link>
           </div>
           <div class="list-box">
             <div class="list">
               <div class="item">
                 <span>新品</span>
                 <div class="item-img">
                   <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg">
                 </div>
                 <div class="item-info">
                   <h3>小米9</h3>
                   <p>枭龙855</p>
                   <p class="price">2999元</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
    <ServiceBar />
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar.vue'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'Home',
  components: {  ServiceBar, swiper, swiperSlide  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
       {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'47',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'48',
          img:'/imgs/slider/slide-1.jpg'
        }
      ],
      menuList: [
        {
          name: '手机 电话卡',
          children: {},
        },
        {
          name: '电视 盒子',
          children: null,
        },
        {
          name: '笔记本 平板',
          children: null,
        },
        {
          name: '家电 插线板',
          children: null,
        },
        {
          name: '出行 穿戴',
          children: null,
        },
        {
          name: '智能 路由器',
          children: null,
        },
        {
          name: '电源 配件',
          children: null,
        },
        {
          name: '生活 箱包',
          children: null,
        },
      ],
      menuDataList:[
        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米CC9',
          },{
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版',
          },{
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro',
          },{
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区',
          }
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },{
          id:48,
          img:'/imgs/ads/ads-2.jpg'
        },{
          id:45,
          img:'/imgs/ads/ads-3.png'
        },{
          id:47,
          img:'/imgs/ads/ads-4.jpg'
        }
      ],
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .home {

    img {
      width: 100%;
      height: 100%;
    }

    .swiper-box {
      position: relative;

      .nav-menu {
        box-sizing: border-box;
        width: 264px;
        height: 451px;
        position: absolute;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585A7A;

        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            font-size: $fontI;
            color: $colorG;
            padding-left: 30px;
            position: relative;

            &:after {
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 17.5px;
            }

            &:hover {
              background-color: $colorA;
              cursor: pointer;

              .children {
                display: block;
              }
            }

            .children {
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position:absolute;
              top: -26px;
              left:264px;
              border:1px solid $colorH;
              ul{
                display:flex;
                justify-content:space-between;
                height:75px;
                li{
                  height:75px;
                  line-height:75px;
                  flex:1;
                  padding-left:23px;
                }
                a{
                  color:$colorB;
                  font-size: $fontJ;
                }
                img{
                  width:42px;
                  height:35px;
                  vertical-align:middle;
                  margin-right:15px;
                }
              }
            }
          }
        }
      }

      .swiper-container {
        height: 451px;

        .swiper-button-prev{
          left:274px;
        }

        img{
          width:100%;
          height:100%;
        }
      }  
    }

    .ads-box{
      @include flex();
      margin-top:14px;
      margin-bottom:31px;
      
      a{
        width:296px;
        height:167px;
      }
    }

    .banner{
      margin-bottom:50px;
    }

    .product-box {
      background-color: $colorJ;
      padding: 30px 0;

      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }

      .wrapper {
        display: flex;

        .banner-left {
          margin-right: 16px;

          img {
            width: 224px;
            height: 619px;
          }
        }

        .list-box {
          .list {
            @include flex();
            width: 986px;
            margin-bottom: 14px;

            &:last-child {
              margin-bottom: 0;
            }

            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;

              .item-img {
                img{
                  width:100%;
                  height:195px;
                }
              }

              .item-info {
                h3{
                  font-size:$fontJ;
                  color:$colorB;
                  line-height:$fontJ;
                  font-weight:bold;
                }

                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }

                .price {
                  color: #F20A0A;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;

                  &:after{
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    content:' ';
                    margin-left:5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>