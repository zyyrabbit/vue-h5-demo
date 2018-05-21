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
							v-model="model.password"
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
							v-model="model.password"
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
							v-model="model.password"
							placeholder="请再次输入你的新密码" 
							originType="comfirePassword"
						>
							确认密码
						</dx-input>
					</dx-form-item>
				</div>
			</dx-form>
		</div>
		<div class="profile-pwd-mod__submit-btn">
         	<dx-button size="max" type="primary">提交</dx-button>
      	</div>
	</div>
</template>
<script>
 import DxHeader from '../../common/HeaderPage.vue'
export default{
	components: {
         DxHeader
      },
	data() {
		return {
			errorMsg: '',
			model: {
				userName: '',
				password: ''
			},
			rules: {
				// 公共验证规则
				baseRule: [
					{name: 'required', message: '* 请输入账户名和密码！'}
				],
				userName: [],
				password: []
			},
			isLogining: false
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