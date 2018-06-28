<template>
    <div class="login">
		<div class="login-form">
			<dx-form 
				ref="loginForm" 
				:model="model" 
				:rules="rules" 
			>
				<div class="login-form__item-title ">欢迎来到一起趣学</div>
				<div class="login-form__item-phone-number" >
					<dx-form-item  	
						prop="userName"
					>
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.userName" 
							placeholder="请输入手机号码"
						>
							<span class="login-form__item-input--text-left">手机号</span>
						</dx-input>
					</dx-form-item>
				</div>
				<div class="login-form__item-password" >
					<dx-form-item prop="password">
						<dx-input 
							inputClass="dx-input-with-title"
							v-model="model.password"
							placeholder="请输入密码" 
							originType="password"
						>
							密码
						</dx-input>
					</dx-form-item>
				</div>
				<div 
					:class="{'is-logining': isLogining}"
					class="login-form__item-btn"
					@click="submit('loginForm')"
				>
					<span>登录</span>
				</div>
				<div>
					<div class="login-form__item-register block--float-right">
					   <router-link to="/reg">去注册</router-link>
					</div>
					<div class="login-form__item-foget-password block--float-left">
						<router-link to="/getpwd">忘记密码？</router-link>
					</div>
				</div>
			</dx-form>
		</div>
	</div>
</template>
<script>
// import AuthApi from 'api/authApi.js'
import uapi from 'api/userApi.js'
import { mapMutations } from 'vuex'
export default{
	name: 'login',
	componentName: 'login',
	data() {
		return {
			errorMsg: '',
			model: {
				// teacher parent
				userName: 'teacher',
				password: '123'
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
	},
	methods: {
		...mapMutations([
			'RECORD_USERINFO'
		]),
		submit(formName) {
			this.isLogining = true
			this.$refs[formName].validate(async valid => {
				this.errorMsg = ''
				if (valid) {
					let params = {}
					params.userName = this.model.userName
					params.userPwd = this.model.password
					// 模拟登陆
					uapi.login(params).then(r => {
						console.info(r)
						// role: 0老师 1家长
						let role = params.userName === 'teacher' ? 0 : 1
						this.RECORD_USERINFO({
							userId: 1,
							tokenId: 123,
							role
						})
						this.$router.push('/home')
					})
					try {
					} catch (e) {
						this.errorMsg = e.message
					}
				} else {
					this.isLogining = false
					this.errorMsg = '* 用户名或密码不能为空!'
					console.log('error submit!')
					return false
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
	@include b(login) {
		height: 100%;
		background: $--login-background;
		background-size: 100% 100%;
		position: relative;
		padding: 0;
		font-size: $--login-form-font-size;
		@include b(login-form) {
			position: absolute;
			width: 100%;
			top: $--login-form-top;
			padding: 0 0.4rem;	
			/* 标题 */
			@include e(item-title) {
				font-size: $--login-form-item-title-font-size;
				margin-bottom: 1.15rem;
			}
			/* 电话号码 */
			@include e(item-phone-number) {
				margin-bottom: 0.54rem;
				.dx-input-origin-input{
					padding-left: 1.8rem;
				}				
			}
			/* 密码 */
			@include e(password) {
				margin-bottom: 0.65rem;			
			}
			/* 提交按钮 */
			@include e(item-btn) {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 1.34rem;
				margin-bottom: 0.42rem;
				margin-top: 0.65rem;
				color: #fff;
				font-size: 0.3rem;
				background: $--login-btn-background;
				cursor: pointer;
				@include when(logining) {
					background: $--login-btn-click-background;
				}
			}
			/* 注册链接 */
			@include e(item-register) {
				/deep/ a {
					color: $--login-form-foget-password-link-color;
				}
			}
			/* 忘记密码链接 */
			@include e(item-foget-password) {
				/* 当组件采用scoped设置css样式时，可以跨组件设置子组件的样式 */
				/deep/ a {
					color: $--login-form-foget-password-link-color;
				}
			}
		}
 	}
</style> 