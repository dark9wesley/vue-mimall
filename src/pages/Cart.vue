<template>
  <div class="cart">
    <OrderHeader title="我的购物车" tips="温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算" />
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1"><span class="checkbox" :class="{checked: allChecked}" @click="toggleAll"></span>全选</li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item, index) in list" :key="index">
              <div class="item-check">
                <span class="checkbox" :class="{checked: item.productSelected}" @click="updateCart(item)"></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage">
                <span>{{item.productName + ' , ' + item.productSubtitle}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}元</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item, '-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="updateCart(item, '+')">+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}元</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <router-link to="/">继续购物</router-link>
            共<span>{{list.length}}</span>件商品，已选择<span>{{ checkedNum }}</span>件
          </div>
          <div class="total fr">
            合计：<span>{{cartTotalPrice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <NavFooter />
  </div>
</template>
<script>
import { request } from '../utils'
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar'

export default {
  name: 'Cart',
  components: {
    OrderHeader, 
    NavFooter,
    ServiceBar,
  },
  data(){
    return {
      list: [],
      allChecked: false,
      cartTotalPrice: 0,
    }
  },
  computed: {
    checkedNum(){
      return this.list.reduce((total, cur) => {
        return cur.productSelected ? total + 1 : total
      }, 0)
    },
  },
  methods: {
    async getCartList(){
      const res = await request.delete(`/carts/1`)
      
      this.renderData(res)
    },
    // 控制全选功能
    async toggleAll(){
      const url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll'
      const res = await request.put(url)
      this.renderData(res)
    },
    // 更新购物车
    async updateCart(item, type){
      let quantity = item.quantity
      let selected = item.productSelected

      if(type == '-'){
        if(quantity == 1){
          this.$message.warning('商品至少保留一件')
          return;
        }
        --quantity;
      }else if(type == '+'){
        if(quantity > item.productStock){
          this.$message.warning('购买数量不能超过库存数量')
          return;
        }
        ++quantity;
      }else{
        selected = !item.productSelected;
      }

      const res = await request.put(`/carts/${item.productId}`,{
          quantity,
          selected
      })

      this.renderData(res)
      
    },
    // 删除购物车商品
    async delProduct(item){
      const res = await request.delete(`/carts/${item.productId}`)
      this.renderData(res);
      this.$message.success('删除成功')
    },
    renderData(data){
      const { cartProductVoList, cartTotalPrice, selectedAll } = data 
      this.list = cartProductVoList || []
      this.allChecked = selectedAll
      this.cartTotalPrice = cartTotalPrice
    },
    // 购物车下单
    order(){
      const isCheck = this.list.every(item =>!item.productSelected);
      if(isCheck){
        this.$message.warning('请选择一件商品')
      }else{
        this.$router.push('/order/confirm');
      }
    }
  },
  mounted(){
    this.getCartList()
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .cart {
    .wrapper {
      background-color: $colorJ;
      padding-top: 30px;
      padding-bottom: 114px;

      .cart-box {
        background-color: $colorG;
        font-size: $fontJ;
        color: $colorD;
        text-align: center;

        .checkbox {
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid $colorH;
          vertical-align: middle;
          margin-right: 17px;
          cursor: pointer;

          &.checked {
            background: url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size: 16px 12px;
            border:none;
          }
        }

        .cart-item-head {
          display: flex;
          height: 79px;
          line-height: 79px;

          .col-1{
            flex:1;
          }

          .col-2{
            flex:2;
          }

          .col-3{
            flex:3;
          }
        }

        .cart-item-list {
          .cart-item {
            display: flex;
            align-items: center;
            height: 125px;
            border-top: 1px solid $colorH;
            font-size: $fontI;

            .item-check {
              flex: 1;
            }

            .item-name {
              flex: 3;
              font-size: $fontH;
              color: $colorB;
              display: flex;
              align-items: center;

              img {
                width: 80px;
                height: 80px;
                vertical-align: middle;
              }

              span {
                margin-left: 30px;
              }
            }

            .item-price {
              flex: 1;
              color: $colorB;
            }

            .item-num {
              flex: 2;

              .num-box {
                display: inline-block;
                width: 150px;
                height: 40px;
                line-height: 40px;
                border: 1px solid $colorH;
                font-size: $fontJ;
                a {
                  display: inline-block;
                  width: 50px;
                  color: $colorB;
                }

                span {
                  display: inline-block;
                  width: 50px;
                  color: $colorB;
                }
              }
            }

            .item-total {
              flex: 1;
              color: $colorA;
            }

            .item-del {
              flex: 1;
              @include bgImg(14px, 12px, '/imgs/icon-close.png');
              cursor:pointer;
            }
          }
        }
      }

      .order-wrap {
        font-size: $fontJ;
        color: $colorC;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;

        .cart-tip {
          margin-left: 29px;

          a {
            color: $colorC;
            margin-right: 37px;
          }

          span {
            color: $colorA;
            margin:0 5px;
          }
        }

        .total {
          font-size: $fontJ;
          color: $colorA;

          span {
            font-size: $fontE;
          }

          a {
            width: 202px;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            margin-left: $fontH;
          }
        }
      }
    }
  }
</style>