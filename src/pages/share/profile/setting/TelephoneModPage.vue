<template>
    <div class="profile-phone-mod">
    	<dx-header></dx-header>
		<div class="profile-phone-mod-form">
			<dx-form 
				ref="pwdModForm" 
				:model="model" 
				:rules="rules" 
			>
				<div class="profile-phone-mod-form__item-title ">修改手机号</div>
				<div class="profile-phone-mod-form__item" >
					<dx-form-item prop="telephoneNum">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.password"
							placeholder="请输入手机号" 
						>
							手机号
						</dx-input>
					</dx-form-item>
				</div>
				<div class="profile-phone-mod-form__item" >
					<dx-form-item prop="password">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.password"
							:inputStyle = "verificationCodeStyle" 
							placeholder="请输入验证码" 
							input-class="profile-phone-mod-form__item--input"
						>
							验证码
							<span slot="leftText">
								<dx-vc v-model="model.phoneNumber"></dx-vc>
							</span>
						</dx-input>
						
					</dx-form-item>
				</div>
			</dx-form>
		</div>
		<div class="profile-phone-mod__submit-btn">
         	<dx-button size="max" type="primary">提交</dx-button>
      	</div>
	</div>
</template>
<script>
 import DxHeader from 'pages/common/HeaderPage.vue'
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
			verificationCodeStyle: {
				paddingRight: '2rem'
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

	@include b(profile-phone-mod) {
		 padding: 0.33rem 0.37rem 0;
		 font-size: 0.36rem;
		@include b(profile-phone-mod-form) {
			margin-top: 0.63rem;
			margin-bottom: 0.86rem;
			@include e(item-title) {
				font-size: 0.6rem;
			}
			@include e(item) {
				margin-top: 0.54rem;
				@include m(verification-code) {
					display: inline-block;
					width: 1.88rem;
					height: 0.51rem;
					background: rgba(255,156,200,1);
					border-radius: 0.26rem;
					font-size: 0.3rem;
					color: #FFFFFF;
					text-align: center;
					vertical-align: top;
				}
				@include m(verification-code-text) {
					vertical-align: middle;
				}
			}
		}
 	}
</style> 