<template>
    <div class="register">
		<div class="register-form">
			<dx-form 
				ref="registerForm" 
				:model="model" 
				:rules="rules" 
			>	
				<div 
					@click="goBack()"
					class="register-form__back"
				> < 
				</div>
				<div class="register-form__item--title">注册</div>
				<div class="register-form__item register-form__item--phone-number" >
					<dx-form-item  	
						prop="userName"
					>
						<dx-input 
							v-model="model.userName"
							placeholder="请输入手机号码"
						>
							手机号
						</dx-input>
					</dx-form-item>
				</div>
				<div class="register-form__item register-form__item--password" >
					<dx-form-item prop="password">
						<dx-input 
							v-model="model.password"
							:inputStyle = "verificationCodeStyle" 
							placeholder="请输入验证码" 
							input-class="register-form__item--input"
						>
							验证码
							<span slot="leftText" class="register-form__item--verification-code">
								<span class="register-form__item--verification-code-text">
									获取验证码
								</span>
							</span>
						</dx-input>
						
					</dx-form-item>
				</div>
				<div class="register-form__item register-form__item--password" >
					<dx-form-item prop="password">
						<dx-input 
							v-model="model.password" 
							placeholder="请输入6-20位数字和字母" 
							originType="password"
						>
							密码
						</dx-input>
					</dx-form-item>
				</div>
				<div class="register-form__item register-form__item--role clearfix" >
					<dx-form-item prop="password">
						<dx-radio 
							v-model="model.role"
							label="0"
							class="register-form__item--radio block--float-left"
						>
							<span 
								slot="radio-icon" 
								class="register-form__item--radio-icon"
							></span>
							家长
						</dx-radio>
						<dx-radio 
							v-model="model.role"
							label="1"
							class="register-form__item--radio block--float-right">
							<span 
								slot="radio-icon" 
								class="register-form__item--radio-icon"
							></span>
							教师
						</dx-radio>
					</dx-form-item>
				</div>
				<div 
					:class="{'register-form__item--btn-click': isRegistering}"
					class="register-form__item--btn"
					@click="submit('registerForm')"
				>
					<span>完成</span>
				</div>
			</dx-form>
		</div>
	</div>
</template>
<script>
    // import AuthApi from 'api/authApi.js'
    import { mapMutations } from 'vuex'
    import * as Types from 'store/mutation-types.js'
export default{
	name: 'register',
	componentName: 'register',
	data() {
		return {
			errorMsg: '',
			model: {
				userName: '',
				password: '',
				role: '0'
			},
			rules: {
				// 公共验证规则
				baseRule: [
					{name: 'required', message: '* 请输入账户名和密码！'}
				],
				userName: [],
				password: []
			},
			isRegistering: false,
			verificationCodeStyle: {
				paddingRight: '2rem'
			}
		}
	},
	methods: {
		...mapMutations({
			setToken: Types.SET_TOKEN,
			setAuthInfo: Types.SET_AUTH_INFO,
			setCustInfo: Types.SET_CUST_INFO
		}),
		submit(formName) {
			this.isRegistering = true
			this.$refs[formName].validate(async valid => {
				this.errorMsg = ''
				if (valid) {
					let params = {}
					params.custName = this.model.userName
					params.custPassword = this.model.password
					params.isRememberMe = this.model.isRememberMe
					try {
					} catch (e) {
						this.errorMsg = e.message
					}
				} else {
					this.isRegistering = false
					this.errorMsg = '* 用户名或密码不能为空!'
					console.log('error submit!')
					return false
				}
			})
		},
		goBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped lang="scss">

	@include b(register) {
		posiiton: relative;
		font-size: $--register-form-font-size;
		@include b(register-form) {
			position: absolute;
			width: 100%;
			top: $--register-form-top;
			padding: 0 0.4rem;
			@include e(back) {
				width: 0.2rem;
				height: 0.36rem;
			}
			@include e(item) {
				margin-bottom: 0.54rem;
				/* 标题 */
				@include m(title) {
					font-size: $--register-form-item-title-font-size;
					margin-top: 0.63rem;
					margin-bottom: 0.78rem;
				}
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
				/* 选择角色 */
				@include m(role) {
					padding: 0 0.85rem;
				}
				@include m(radio) {
					font-size: 0.36rem;
					color: #484848;
				}
				@include m(radio-icon) {
					display: inline-block;
					background: $--register-btn-no-select-background;
					width: 0.88rem;
    				height: 0.88rem;
				}
				/* 角色选中的样式 */
				.is-check {
					.register-form__item--radio-icon {
					  	background: $--register-btn-select-background;
					}
				}
				/* 提交按钮 */
				@include m(btn) {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 1.34rem;
					margin-bottom: 0.42rem;
					color: #fff;
					font-size: 0.3rem;
					background: $--register-btn-background;
					cursor: pointer;
				}
				/* 按钮提交时，背景色 */
				@include m(btn-click) {
					background: $--register-btn-click-background;
				}
			}
		}
 	}
</style> 