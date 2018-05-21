<template>
   <div class="profile-account">
      <dx-header></dx-header>
      <div class="profile-account--title">
           账号设置
      </div>
      <dx-item>
         <span slot="left">手机号</span>
         <span 
            slot="right" 
            class="profile-account--telephone-number"
         >13978784676</span>
      </dx-item>
      <dx-item>
         <span slot="left">修改密码</span>
         <span 
            slot="right"
            class="profile-account--mod-pwd"
            @click="goPath()"
         >修改</span>
      </dx-item>
   </div>
</template>
<script>
   import DxHeader from '../../common/HeaderPage.vue'
   export default {
      components: {
         DxHeader
      },
      methods: {
         goPath(path) {
            this.$router.push('/profile/pwdMod')
         }
      }
   }
</script>
<style scoped lang="scss">
   @include b(profile-account) {
      padding: 0.33rem 0.37rem 0;
      color: #484848;
      font-size: 0.36rem;
      @include m(title) {
         text-align: left;
         font-size: 0.6rem;
         margin-top: 0.62rem;
      }
      @include m(mod-pwd telephone-number) {
         color: #57B8D7;
      }
   }  
</style>