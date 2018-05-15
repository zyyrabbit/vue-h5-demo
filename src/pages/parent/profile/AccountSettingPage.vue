<template>
   <div class="index-billing">
      <dx-header></dx-header>
      <div class="index-billing--money">
           账号设置
      </div>
      <div class="index-billing--type">
         手机号
         <span  class="block--float-right">13978784676</span>
      </div>
      <div class="index-billing--time">
         修改密码
         <span  class="block--float-right">修改</span>
      </div>
   </div>
</template>
<script>
   import DxHeader from '../../common/HeaderPage.vue'
   export default {
      components: {
         DxHeader
      },
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
      @include m(type time) {
         line-height: 1.39rem;
         border-bottom: 2px solid #EBEBEB;
      }
      @include m(time) {
         border: none;
      }
   }  
</style>