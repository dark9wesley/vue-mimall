<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{addressInfo}}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>{{payment}}</span>元</p>
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderId}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{addressInfo}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage"/>{{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" :class="{'checked':payType==1}" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{'checked':payType==2}" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code v-if="showPay" @close="closePayModal" :img="payImg"></scan-pay-code>
    <modal
      title="支付确认"
      btnType="3"
      :showModal="showPayModal"
      sureText="查看订单"
      cancelText="未支付"
      @cancel="showPayModal=false"
      @ok="goOrderList"
    >
      <template v-slot:body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from '../../components/Modal'

export default {
  name: 'OrderPay',
  components: { Modal }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/config.scss';
  @import '../../assets/scss/mixin.scss';
  
  .order-pay {
    .wrapper {
      background-color: $colorJ;
      padding-top: 30px;
      padding-bottom: 61px;

      .order-wrap {
        padding: 62px 50px;
        background-color: $colorG;
        font-size: $fontJ;
        margin-bottom: 30px;

        .item-order {
          display: flex;
          align-items: center;

          .icon-succ {
            @include bgImg(90px, 90px, '/imgs/icon-gou.png', 60px);
            background-color: #80c58a;
            border-radius: 50%;
            margin-right:40px;
          }

          .order-info {
            margin-right: 248px;
            
            h2 {
              font-size: $fontE;
              color: $colorB;
              margin-bottom: 20px;
            }

            p {
              color: $colorC;
              span{
                color: $colorA;
              }
            }
          }

          .order-total {
            &>p:first-child {
              margin-bottom: 30px;
            }

            span {
              font-size: $fontC;
              color: $colorA;
            }

            .icon-down {
              @include bgImg(14px, 10px, '/imgs/icon-down.png', contain);
              display: inline-block;
              margin-left: 9px;
              transition: all .5s;
              cursor: pointer;

              &.up {
                transform: rotate(180deg);
              }
            }

            .icon-up {
              transform: rotate(180deg);
            }
          }
        }

        .item-detail {
          border-top: 1px solid $colorF;
          padding-top: 47px;
          padding-left: 130px;
          font-size: $fontJ;
          margin-top: 45px;

          .item {
            margin-bottom: 19px;

            .detail-title {
              float: left;
              width: 100px;
            }

            .detail-info {
              display: inline-block;
              img {
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }

      .item-pay {
        padding:26px 50px 72px;
        background-color: $colorG;
        color: $colorB;

        h3 {
          font-size: $fontG;
          font-weight: 200;
          color: $colorB;
          padding-bottom: 24px;
          border-bottom: 1px solid $colorF;
          margin-bottom: 26px;
        }

        .pay-way {
          font-size: $fontH;
          
          .pay {
            display: inline-block;
            width: 188px;
            height: 64px;
            border: 1px solid $colorF;
            cursor: pointer;

            &:last-child {
              margin-left: 20px;
            }

            &.checked {
              border: 1px solid $colorA;
            }
          }
          .pay-ali{
            background: url('/imgs/pay/icon-ali.png') no-repeat center;
            background-size: 103px 38px;
            margin-top: 19px;
          }
          .pay-wechat{
            background: url('/imgs/pay/icon-wechat.png') no-repeat center;
            background-size: 103px 38px;
          }
        }
      }
    }
  }
</style>