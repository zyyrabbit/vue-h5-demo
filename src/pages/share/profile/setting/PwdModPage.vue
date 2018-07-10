<template>
    <div class="profile-pwd-mod">
    	<dx-header></dx-header>
		<div class="profile-pwd-mod-form">
			<dx-form 
				ref="pwdModForm" 
				:model="model" 
				:rules="rules" 
			>
				<div class="profile-pwd-mod-form__item-title ">修改密码</div>
				<div class="profile-pwd-mod-form__item-password" >
					<dx-form-item prop="oldPassword">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.userPwd"
							placeholder="无密码时可不填" 
							originType="password"
						>
							原密码
						</dx-input>
					</dx-form-item>
				</div>
				<div class="profile-pwd-mod-form__item-password" >
					<dx-form-item prop="newPassword">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.newUserPwd"
							placeholder="请输入6-20位数字或字" 
							originType="password"
						>
							新密码
						</dx-input>
					</dx-form-item>
				</div>
				<div class="profile-pwd-mod-form__item-password" >
					<dx-form-item prop="password">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.newUserPwd2"
							placeholder="请再次输入你的新密码" 
							originType="password"
						>
							确认密码
						</dx-input>
					</dx-form-item>
				</div>
			</dx-form>
		</div>
		<div class="profile-pwd-mod__submit-btn">
			<dx-button @dx-button-click="updatePwd()" size="max" type="primary">提交</dx-button>
		</div>
	</div>
</template>
<script>
import md5 from 'js-md5'
import uapi from 'api/userApi.js'
import DxHeader from 'pages/common/HeaderPage.vue'
export default{
	components: {
		DxHeader
	},
	data() {
		return {
			errorMsg: '',
			model: {
				userPwd: '',
				newUserPwd: '',
				newUserPwd2: ''
			},
			rules: {
				// 公共验证规则
				baseRule: [
					{name: 'required', message: '* 请输入账户名和密码！'}
				]
			},
			isLogining: false
		}
	},
	methods: {
		updatePwd() {
			console.info()
			if (!this.model.userPwd || !this.model.newUserPwd || !this.model.newUserPwd2) {
				alert('请完整填写')
				return
			}
			if (this.model.newUserPwd !== this.model.newUserPwd2) {
				alert('两次密码输入不一致')
				return
			}
			let param = {
				userPwd: md5(this.model.userPwd),
				newUserPwd: md5(this.model.newUserPwd)
			}
			uapi.updatePassword(param).then(r => {
				alert('修改密码成功!')
				this.$router.go(-1)
			})
		}
	}
}
</script>

<style scoped lang="scss">

	@include b(profile-pwd-mod) {
		 padding: 0.33rem 0.37rem 0;
		 font-size: 0.36rem;
		@include b(profile-pwd-mod-form) {
			margin-top: 0.63rem;
			margin-bottom: 0.86rem;
			@include e(item-title) {
				font-size: 0.6rem;
			}
			@include e(item-password) {
				margin-top: 0.54rem;
			}
		}
 	}
</style> 