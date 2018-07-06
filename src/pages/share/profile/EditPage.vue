<template>
   <div class="profile-account-edit">
      <dx-header>
         <span slot="title">编辑个人资料</span>
         <span 
            slot="next"
            class="profile-account-edit--save"
            @click="submitUserInfo()"
         >保存</span>
      </dx-header>
      <div class="profile-account-edit--icon">
         <div>
            <div class="profile-account-edit--icon-pic"
              :style="{backgroundImage: 'url(' + user.persionalImage + ')'}"></div>
            <div @click="selectImage()">上传头像</div>
            <input ref="selectImage" @change="uploadImage()" type="file" v-show="false" />
         </div>
      </div>
      <div class="profile-account-edit__content">
         <dx-item class="profile-account-edit__item">
            <span slot="left">
              <dx-input
                v-model="user.name"
                :inputStyle = "inputStyle"
                placeholder="请输入姓名">
              </dx-input>
            </span>
            <span 
              slot="right" 
              class="profile-account-edit__item--parent-text">{{user.role === '0' ? '老师':'家长'}}</span>
         </dx-item>
         <dx-item class="profile-account-edit__item">
            <span 
              slot="left"
              class="profile-account-edit__item--birthday">
              <dx-input
                v-model="user.age"
                :inputStyle = "inputStyle"
                placeholder="年龄">
              </dx-input>
            </span>
            <span 
              slot="right"
              class="profile-account--mod-pwd">
              <span class="profile-account-edit--sex" 
                @click="user.sex = '男'"
                :class="{'blue':user.sex === '男'}">男</span>
              <span class="profile-account-edit--sex" 
                @click="user.sex = '女'"
                :class="{'red':user.sex === '女'}">女</span>
            </span>
         </dx-item> 
         <dx-item class="profile-account-edit__item">
            <span slot="left">
              <dx-input
                v-model="user.persionalSignature"
                :inputStyle = "inputStyle"
                placeholder="个人签名">
              </dx-input>
            </span>
         </dx-item> 
         <dx-item class="profile-account-edit__item">
            <span slot="left">
              <dx-input
                v-model="user.persionalIntroduction"
                :inputStyle = "inputStyle"
                placeholder="个人介绍">
              </dx-input>
            </span>
         </dx-item> 
      </div>
   </div>
</template>
<script>
  import axios from 'axios'
  import uapi from 'api/userApi.js'
  import { mapMutations } from 'vuex'
  import DxHeader from '../../common/HeaderPage.vue'
  export default {
    components: {
      DxHeader
    },
    data() {
      return {
        user: {},
        inputStyle: {
          padding: 0,
          border: 'none',
          fontSize: '0.36rem'
        }
      }
    },
    mounted() {
      this.getMyInfo((r) => {
        this.user = r.data
      })
    },
    methods: {
      ...mapMutations([
        'RECORD_USERINFO'
      ]),
      selectImage() {
        this.$refs.selectImage.click()
      },
      uploadImage() {
        let file = this.$refs.selectImage.files[0]
        let formdata = new FormData()
        formdata.append('file', file)
        axios({
          url: axios.$context + '/images/fileUpload',
          method: 'post',
          data: formdata,
          headers: {'Content-Type': 'multipart/form-data'}
        }).then((r) => {
          this.user.persionalImage = r.data.data
        }).catch(() => {
          alert('上传失败')
        })
      },
      goPath(path) {
        this.$router.push('/profile/pwdMod')
      },
      getMyInfo(cb) {
        uapi.getPersonalInfo().then(r => {
          cb(r)
        })
      },
      submitUserInfo() {
        uapi.updateUserInfo(this.user).then(r => {
          this.getMyInfo((r) => {
            this.RECORD_USERINFO(r.data)
            this.$router.go(-1)
          })
        })
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
        background-size: 100% 100%; 
        border-radius: 50%;
        border: 1px solid #f3f3f3;
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
      @include m (sex) {
        padding: 0.02rem 0.3rem;
        border-radius: 0.3rem;
      }
      .red{
        background: #FF9CC8;
        color: #fff;
      }
      .blue{
        background: #8DD0EC;
        color: #fff;
      }
   }  
</style>