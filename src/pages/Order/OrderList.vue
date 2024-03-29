<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <Pagination
            v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
            >
          </Pagination>
          <div class="load-more" v-if="false">
              <Button type="primary" :loading="loading" @click="loadMore">加载更多</Button>
          </div>
          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="410"
            v-if="true"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Loading from '../../components/Loading'
  import NoData from '../../components/NoData'
  import { Pagination,Button } from 'element-ui'
  import infiniteScroll from 'vue-infinite-scroll'
  import { request } from '../../utils'

  export default {
    name: 'OrderList',
    components:{
        Loading,
        NoData,
        Pagination,
        Button
    },
    directives: {
      infiniteScroll
    },
    data(){
      return {
        loading: false,
        list: [],
        pageSize: 10,
        pageNum: 1,
        total: 0,
        showNextPage: true,//加载更多：是否显示按钮
        busy: false,//滚动加载，是否触发
      }
    },
    mounted(){
      this.getOrderList();
    },
    methods:{
      async getOrderList(){
        this.loading = true;
        this.busy = true;
        try {
          const res = await request.get('/orders',{
            params:{
              pageSize:10,
              pageNum:this.pageNum
            }
          })
          this.loading = false;
          this.list = this.list.concat(res.list);
          this.total = res.total;
          this.showNextPage = res.hasNextPage;
          this.busy = false;
        } catch (e) {
          this.loading = false;
        }
      },
      goPay(orderNo){
        // 三种路由跳转方式
        // this.$router.push('/order/pay')
        /*this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        })*/
        this.$router.push({
          path:'/order/pay',
          query:{
            orderNo
          }
        })
      },
      // 第一种方法：分页器
      handleChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
      },
      // 第二种方法：加载更多按钮
      loadMore(){
        this.pageNum++;
        this.getOrderList();
      },
      // 第三种方法：滚动加载，通过npm插件实现
      scrollMore(){
        this.busy = true;
        setTimeout(()=>{
          this.pageNum++;
          this.getList();
        },500);
      },
      // 专门给scrollMore使用
      async getList(){
        this.loading = true;
        const res = await request.get('/orders',{
          params:{
            pageSize:10,
            pageNum:this.pageNum
          }
        })
        this.list = this.list.concat(res.list);
        this.loading = false;
        if(res.hasNextPage){
          this.busy=false;
        }else{
          this.busy=true;
        }
      },
    }
  }
</script>
<style lang="scss">
  @import '../../assets/scss/config.scss';
  @import '../../assets/scss/mixin.scss';

  .order-list {
    .wrapper {
      background-color: $colorJ;
      padding-top: 33px;
      padding-bottom: 110px;

      .order-box {
        .order {
          @include border();
          background-color: $colorG;
          margin-bottom: 31px;

          &:last-child {
            margin-bottom: 0;
          }

          .order-title {
            @include height(74px);
            background-color: $colorK;
            padding: 0 43px;
            font-size: $fontI;
            color: $colorC;

            .item-info {
              span {
                margin: 0 9px;
              }
            }

            .money {
              font-size: $fontD;
              color: $colorB;
            }
          }

          .order-content {
            padding: 0 43px;

            .good-box {
              width: 88%;

              .good-list {
                display: flex;
                align-items: center;
                height: 145px;

                .good-img {
                  width: 112px;
                  
                  img {
                    width: 100%;
                  }
                }

                .good-name {
                  font-size: $fontG;
                  color: $colorB;
                }
              }
            }
            .good-state {
              @include height(145px);
              font-size: $fontG;
              color: $colorA;

              a {
                color: $colorA;
              }
            }
          }
        }

        .pagination {
          text-align: right;
        }

        .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: $colorA;
        }
        .el-button--primary {
          background-color: $colorA;
          border-color: $colorA;
        }
        .load-more, .scroll-more {
          text-align: center;
        }
      }
    }
  }
</style>