<template>
   <div class="teacher-change-place">
   		<dx-header></dx-header>
   	    <div class="teacher-change-place--title">
   	    	更换场地
   	    </div>
   	   <button-footer to="" btnText="确定"></button-footer>
    </div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader,
			ButtonFooter
		},
		data() {
			return {
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(teacher-change-place) {
		padding: 0.33rem 0.37rem 0;
		color: #484848;
		font-size: 0.34rem;
		@include m(title) {
			font-size: 0.6rem;
		}
	}	
</style>