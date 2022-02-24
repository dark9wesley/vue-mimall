<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
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
    }
  }
}
</script>
<style lang='scss' scoped>
  .home {
    .swiper-box {
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