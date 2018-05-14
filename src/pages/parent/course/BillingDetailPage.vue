<template>
   <div class="index-billing">
         <div class="index-billing--title"> 
               <span 
                  @click="goBack()"
                  class="index-billing--back block--float-left"
               >
                  X
               </span>
               账单明细
         </div>
         <div class="index-billing--money">
               +260.00
         </div>
         <div class="index-billing--type">
            类型
            <span  class="block--float-right">课程退款</span>
         </div>
         <div class="index-billing--time">
            时间
            <span  class="block--float-right">2018年4月28号 17:49</span>
         </div>
         <div class="index-billing--transaction">
            交易单号
           <span  class="block--float-right">10983785784332</span>
         </div>
         <div class="index-billing--status">
             状态
            <span  class="block--float-right">已入账</span>
         </div>
    </div>
</template>
<script>
   export default {
      methods: {
         goBack() {
            this.$router.go(-1);
         }
      }
   }
</script>
<style  lang="scss">
   @include b(index-billing) {
      padding: 0.33rem 0.37rem 0;
      color: #484848;
      font-size: 0.36rem;
      @include m(title) {
         text-align: center;
      }
      @include m(money) {
         margin: 0.66rem 0;
         font-size: 1rem;
         color: #57B8D7;
         text-align: center;
      }
      @include m(type time transaction status) {
         line-height: 1.39rem;
         border-bottom: 2px solid #EBEBEB;
      }
      @include m(status) {
         border: none;
      }
   }  
</style>