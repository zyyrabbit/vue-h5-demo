<template>
   <div class="profile-account-invite-friends">
       <dx-header>
          <span 
            slot="title"
            class= "profile-account-invite-friends--title"
         >邀请好友</span>
      </dx-header>
      <div class="profile-account-invite-friends__qr-code">
         <p>每邀请一位好友成功注册你将会得到2888积分</p>
         <div class="profile-account-invite-friends__qr-code--pic"></div>
         <p>我的个人专属二维码</p>
      </div>
   </div>
</template>
<script>
   import DxHeader from '../../common/HeaderPage.vue'
   export default {
      components: {
         DxHeader
      }
   }
</script>
<style scoped lang="scss">
   @include b(profile-account-invite-friends) {
      padding: 0.33rem 0.37rem 0;
      color: #484848;
      font-size: 0.36rem;
      @include m(title) {
         text-align: left;
         font-size: 0.36rem;
         margin-top: 0.62rem;
      }
      @include e(qr-code) {
         color: #333333;
         width: 4.33rem;
         margin: 1.55rem auto;
      
         @include m(pic) {
            width: 4.33rem;
            height: 4.33rem;
            background-color: blue;
            margin: 0.27rem 0;
         }
         &>p {
            text-align: center;
         }
      }
   }  
</style>