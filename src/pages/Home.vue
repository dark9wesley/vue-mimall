<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item" v-for="(m, i) in menuList" :key="i">
              <span>{{ m.name }}</span>
              <!-- <div class="children" v-if="m.children">111</div> -->
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
      <div class="ads">
      </div>
      <div class="banner"></div>
      <div class="product-box"></div>
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
  components: { swiper, swiperSlide, ServiceBar  },
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
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
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
    }
  }
}
</script>
<style lang='scss' scoped>
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .home {

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
  }
</style>