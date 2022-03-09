<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
  import Loading from '../../components/Loading'
  import { request } from '../../utils' 

  export default{
    name:'alipay',
    components:{
      Loading
    },
    data(){
      return {
        orderId:this.$route.query.orderId,
        content:'',
        loading:true
      }
    },
    mounted(){
      this.paySubmit();
    },
    methods:{
      async paySubmit(){
        const res =  await request.post('/pay',{
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01,//单位元
          payType: 1 //1支付宝，2微信
        })
        this.content = res.content;
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      }
    }
  }
</script>