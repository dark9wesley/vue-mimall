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
                      <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'">
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
            <router-link :to="`/product/${p.id}`"><img v-lazy="p.img"></router-link>
          </swiperSlide>
           <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <router-link :to="'/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </router-link>
      </div>
      <div class="banner">
        <router-link to="/product/30">
          <img v-lazy="'/imgs/banner-1.png'">
        </router-link>
      </div>
    </div>
    <div class="product-box">
       <div class="container">
         <h2>手机</h2>
         <div class="wrapper">
           <div class="banner-left">
            <router-link to="/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'">
            </router-link>
           </div>
           <div class="list-box">
             <div class="list">
               <div class="item" v-for="(item, index) in dataList" :key="item.id">
                 <span :class="index % 2 ? '' : 'new-pro'">新品</span>
                 <router-link :to="'/product/' + item.id">
                  <div class="item-img">
                    <img v-lazy="item.mainImage">
                  </div>
                 </router-link>
                 <div class="item-info">
                   <h3>{{ item.name }}</h3>
                   <p>{{ item.subtitle }}</p>
                   <p class="price" @click="addCart(item.id)">{{ item.price }}元</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
    <ServiceBar />
    <Modal 
      :showModal="showModal"
      title="提示" 
      okText="查看购物车" 
      btnType="1" 
      modalType="middle"
      @ok="gotoCard"
      @cancel="setModalShow"
    >
      <template v-slot:body>
        <p>
          添加商品成功！
        </p>
      </template>
    </Modal>
  </div>
</template>
<script>
import { request } from '../utils'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'

export default {
  name: 'Home',
  components: { ServiceBar, swiper, swiperSlide, Modal  },
  data(){
    return {
      showModal: false,
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
      dataList: [],
    }
  },
  methods: {
    async getProductList(){
      const res = await request.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      })
      this.dataList = res.list.slice(6,14);
    },
    setModalShow(){
      this.showModal = !this.showModal
    },
    async addCart(id){
      const res = await request.post('/carts', {
        productId: id,
        selected: true,
      })
      const total = res.cartProductVoList?.length || 0 
      this.$store.dispatch('saveCartCount', total)
      this.setModalShow()
    },
    gotoCard(){
      this.$router.push('/cart')
      this.setModalShow()
    }
  },
  mounted(){
    this.getProductList()
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
            flex-wrap: wrap;
            width: 986px;

            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              margin-bottom: 14px;

              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size:14px;
                line-height:24px;
                color:$colorG;

                &.new-pro{
                  background-color:#7ECF68;
                }

                &.kill-pro{
                  background-color:#E82626;
                }
              }

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