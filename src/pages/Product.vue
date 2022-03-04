<template>
  <div class="product">
    <NavBar>
      <template v-slot:buy>
        <div class="btn">
          立即购买
        </div>
      </template>
    </NavBar>
    <div class="content">
      <div class="item-bg">
        <h2>小米9</h2>
        <h3>小米9 战斗天使</h3>
        <p>
          <a>全球首款双频 GP</a>
          <span>|</span>
          <a>骁龙845</a>
          <span>|</span>
          <a>AI 变焦双摄</a>
          <span>|</span>
          <a>红外人脸识别</a>
        </p>
        <div class="price">
          <span>￥<em>2599</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
            <swiperSlide v-for="s in slideList" :key="s.id"><img :src="s.img"></swiperSlide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
        <div class="video-bg"></div>
        <div class="video-box">
          <div class="overlay"></div>
          <div class="video">
            <span class="icon-close"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Product',
  components: { NavBar, swiper, swiperSlide },
  data(){
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slideList: [
       {
          id:'42',
          img:'/imgs/product/gallery-2.png'
        },
        {
          id:'45',
          img:'/imgs/product/gallery-3.png'
        },
        {
          id:'46',
          img:'/imgs/product/gallery-4.png'
        },
        {
          id:'47',
          img:'/imgs/product/gallery-5.jpg'
        },
        {
          id:'48',
          img:'/imgs/product/gallery-6.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '../assets/scss/mixin.scss';
   @import '../assets/scss/config.scss';

  .product {
    .content {
      .item-bg {
        @include bgImg(100%, 100%, '/imgs/product/product-bg-1.png', cover);
        height: 718px;
        text-align: center;

        h2 {
          font-size: $fontA;
          padding-top: 55px;
        }

        h3 {
          font-size: $fontE;
          letter-spacing: 10px;
        }

        p {
          margin-top: 21px;
          margin-bottom: 40px;

          a {
            font-size: $fontI;
            color: $colorB;
          }

          span {
            margin: 0 15px;
          }
        }

        .price {
          font-size: 30px;
          color: $colorB;

          em {
            font-style: normal;
            font-size: 38px;
          }
        }
      }

      .item-bg-2 {
        @include bgImg(100%, 100%, '/imgs/product/product-bg-2.png', 1226px 397px);
        height: 480px;
      }

      .item-bg-3 {
        @include bgImg(100%, 100%, '/imgs/product/product-bg-3.png', cover);
        height: 638px;
      }

      .item-swiper {
        margin: 36px auto 52px;

        .desc {
          font-size: $fontH;
          color: $colorB;
          text-align: center;
        }

        img {
          width: 100%;
        }
      }

      .item-video {
        height: 1044px;
        background-color: #070708;
        margin-bottom: 76px;
        color: $colorG;
        text-align: center;

        h2 {
          font-size: 60px;
          padding-top: 82px;
          margin-bottom: 47px;
        }

        p {
          font-size: $fontE;
          margin-bottom: 58px;
        }

        .video-bg {
          @include bgImg(100%, 100%, '/imgs/product/gallery-1.png', cover);
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }

        .video-box {
          @include position(fixed);
          z-index: 10;

          .overlay {
            @include position(fixed);
            background-color: $colorI;
            opacity: .5;
          }

          .video {
            @include position(fixed, 50%, 50%);
            transform: translate(-50%, -50%);
            width: 1000px;
            height: 536px;

            video {
              width: 100%;
              height: 100%;
              object-fit: cover;
              outline:none;
            }

            .icon-close {
              position: absolute;
              top: 20px;
              right: 20px;
              cursor: pointer;
              z-index: 12;
              @include bgImg(20px, 20px, '/imgs/icon-close.png');
            }
          }
        }

      }
    }
  }
</style>