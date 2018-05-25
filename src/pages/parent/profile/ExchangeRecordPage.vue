<template>
   <div class="profile-account-exchange">
      <dx-header></dx-header>
      <div class="profile-account-exchange--title">兑换记录</div>
      <ul>
         <li class="profile-account-exchange__record">
            <dx-item>
               <div 
                  slot="left"
                  class="profile-account-exchange__record--left"
               >
                  <p>一起趣学8折优惠券</p>
                  <p>在购买课程的时候自动折扣</p>
               </div>
               <div 
                  slot="right"
                  class="profile-account-exchange__record--right"
               >
                  <p>兑换成功</p>
                  <p>3月3号 2018</p>
               </div>
            </dx-item>
         </li>

          <li class="profile-account-exchange__record">
            <dx-item>
               <div 
                  slot="left"
                  class="profile-account-exchange__record--left"
               >
                  <p>一起趣学8折优惠券</p>
                  <p>在购买课程的时候自动折扣</p>
               </div>
               <div 
                  slot="right"
                  class="profile-account-exchange__record--right"
               >
                  <p>兑换成功</p>
                  <p>3月3号 2018</p>
               </div>
            </dx-item>
         </li>
      </ul>
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
            this.$router.go(-1)
         }
      }
   }
</script>
<style scoped lang="scss">
   @include b(profile-account-exchange) {
      padding: 0.31rem 0.4rem 0;
      font-size: 0.36rem;
      color: #484848;
      @include m(title) {
         font-size: 0.6rem;
         margin: {
            top: 0.68rem;
         }
      }

      @include e(record) {
         border-bottom: 0.02rem solid #EBEBEB;
         &:last-child {
            border-bottom: none;
         }
         @include m(left right) {
            text-align: center;
            margin: 0.6rem 0;
         }
         @include m(left) {
            >p:nth-child(1) {
               font-size: 0.36rem;
            }
            >p:nth-child(2) {
               font-size: 0.26rem;
            }
         }
         @include m(right) {
            font-size: 0.3rem;
            color: #57B8D7;
         }
      }
   }  
</style>