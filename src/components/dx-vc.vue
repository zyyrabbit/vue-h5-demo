<template>
	<div>
		<dx-button 
			type="pinking" size="small" 
			@dx-button-click="sendVc()"
			:class="{'dx-vc-disabled': sendingVc}">{{sendingVc ? vcTime + 's后重发' : '获取验证码'}}</dx-button>
	</div>
</template>
<script>
export default {
	name: 'DxVc',
	componentName: 'DxVc',
	data() {
		return {
			sendingVc: false,
			vcTime: 60
		}
	},
	methods: {
		sendVc() {
			// this.model.userName
			if (!this.sendingVc) {
				this.sendingVc = true
				this.vcTime = 60
				this.setCoutDown()
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
.dx-vc-disabled{
	background: #C3C3C3!important;
}
.dx-vc-disabled:focus, .dx-vc-disabled:hover{
	border-color: #C3C3C3!important;
	color: white!important;
}
</style>