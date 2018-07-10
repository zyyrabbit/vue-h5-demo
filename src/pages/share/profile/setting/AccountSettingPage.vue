<template>
   <div class="profile-account">
      <dx-header></dx-header>
      <div class="profile-account--title">
           账号设置
      </div>
      <dx-item
         class="profile-account--item"
         to="/phoneMod"
      >
         <span slot="left">手机号</span>
         <span 
            slot="right" 
            class="profile-account--telephone-number"
         >{{userInfo.phoneNumber}}</span>
      </dx-item>
      <dx-item  
         class="profile-account--item"
         to="/pwdMod"
      >
         <span slot="left">修改密码</span>
         <span 
            slot="right"
            class="profile-account--mod-pwd"
         >修改</span>
      </dx-item>
   </div>
</template>
<script>
	import { mapGetters } from 'vuex'
  import DxHeader from 'pages/common/HeaderPage.vue'
  export default {
    components: {
        DxHeader
    },
		computed: {
			...mapGetters([
				'userInfo'
			])
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
      @include m(item) {
         &:not(:last-child) {
            line-height: 1.39rem;
            border-bottom: 0.02rem solid #EBEBEB;
            border-bottom: none;
         } 
      }
      @include m(mod-pwd telephone-number) {
         color: #57B8D7;
      }
   }  
</style>