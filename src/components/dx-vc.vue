<template>
	<div>
		<dx-button 
			type="pinking" size="small" 
			@dx-button-click="sendVc()"
			:class="{'dx-vc-disabled': sendingVc}">{{sendingVc ? vcTime + 's后重发' : '获取验证码'}}</dx-button>
	</div>
</template>
<script>
import uapi from 'api/userApi.js'
export default {
	name: 'DxVc',
	componentName: 'DxVc',
	props: {
		value: String
	},
	data() {
		return {
			sendingVc: false,
			vcTime: 60
		}
	},
	methods: {
		sendVc() {
			if (!this.value) {
				alert('请先输入手机号')
				return
			}
			if (!this.sendingVc) {
				uapi.sendVc({phoneNumber: this.value}).then(r => {
					this.sendingVc = true
					this.vcTime = 60
					this.setCoutDown()
				}).catch({})
			}
		},
		setCoutDown() {
			if (this.vcTime === 0) {
				this.sendingVc = false
			} else {
				let _this = this
				setTimeout(function() {
					_this.vcTime -= 1
					_this.setCoutDown(_this.vcTime)
				}, 1000)
			}
		}
	}
}
</script>
<style scope lang="scss">
.dx-button-pinking{
	background: #FF9CC8!important;
}
.dx-button-pinking:focus, .dx-button-pinking:hover{
	border-color: #FF9CC8!important;
	color: white!important;
}
.dx-vc-disabled{
	background: #C3C3C3!important;
}
.dx-vc-disabled:focus, .dx-vc-disabled:hover{
	border-color: #C3C3C3!important;
	color: white!important;
}
</style>