<template>
   <div class="profile-account-edit">
      <dx-header>
         <span slot="title">编辑个人资料</span>
         <span 
            slot="next"
            class="profile-account-edit--save"
         >保存</span>
      </dx-header>
      <div class="profile-account-edit--icon">
         <div>
            <div class="profile-account-edit--icon-pic"></div>
            <div>上传头像</div>
         </div>
      </div>
      <div class="profile-account-edit__content">
         <dx-item class="profile-account-edit__item">
            <span slot="left">么么茶</span>
            <span 
               slot="right" 
               class="profile-account-edit__item--parent-text"
            >家长</span>
         </dx-item>
         <dx-item class="profile-account-edit__item">
            <span 
               slot="left"
               class="profile-account-edit__item--birthday"
            >生日</span>
            <span 
               slot="right"
               class="profile-account--mod-pwd"
               @click="goPath()"
            >男/女</span>
         </dx-item> 
         <dx-item class="profile-account-edit__item">
            <span slot="left">江苏省南京市仙灵区</span>
         </dx-item> 
         <dx-item class="profile-account-edit__item">
            <span slot="left">会学习,才会生活</span>
         </dx-item> 
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
         goPath(path) {
            this.$router.push('/profile/pwdMod')
         }
      }
   }
</script>
<style scoped lang="scss">
   @include b(profile-account-edit) {
      padding: 0.33rem 0.37rem 0;
      font-size: 0.36rem;
      @include m(save) {
         color: #57B8D7;
      }
      @include m(icon) {
         height: 3.86rem;
         text-align: center;
         @include center;
      }

      @include m(icon-pic) {
         height: 1.85rem;
         width: 1.85rem;
         margin-bottom: 0.16rem;
         background-color: red;
         border-radius: 50%;
      }
     
      @include e(item) {
         line-height: 1.55rem;
         border-bottom: 0.02rem solid #EBEBEB;
         &:last-child {
            border-bottom: none;
         }
         @include m(parent-text) {
            font-size: 0.3rem;
         }
         @include m(birthday) {
            color: #7E7E7E;
         }
      }
   }  
</style>