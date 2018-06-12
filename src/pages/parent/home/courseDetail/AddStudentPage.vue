<template>
    <div class="home-course-add-student">
    	<dx-header>
    		<span 
    			slot="next"
    			class="home-course-add-student--add"
    		>添加</span>
    	</dx-header>
    	<p class="home-course-add-student--title">编辑学员</p>
    	<p class="home-course-add-student--no">还没有在编学员,请点击添加</p>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-add-student) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(add) {
			color: #57B8D7;
		}
		@include m(title) {
			margin-top: 0.66rem;
			font-size: 0.6rem;
			color: #484848;
		}
		@include m(no) {
			color: #484848;
		}
	}

</style>