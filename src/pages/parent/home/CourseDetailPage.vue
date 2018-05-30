<template>
    <div class="home-course-detail">
    	<div class="home-course-detail--banner"></div>
    	<div class="home-course-detail__header">
	       	<dx-header>
	       		<span slot="next">
	       			<span></span>
	       			<span></span>
	       		</span>
	       	</dx-header>
       	</div>
       	
	   	<div class="home-course-detail__teacher">
	   		<p>趣味科学大百科</p>
	   		<dx-item>
	   			<div slot="left">
	   				<div>老师：奕爸CY</div>
	   				<div>儿童心理达人</div>
	   				<div>联系老师</div>
	   			</div>
	   			<div slot="right"></div>
	   		</dx-item>
	   	</div>  
	   	<div class="home-course-detail__introduce"></div>
	   	<div class="home-course-detail__parent-judge"></div>
	   	<div class="home-course-detail__submit-btn"></div>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from '../../common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-detail) {
		font-size: 0.36rem;
		padding: 0 0.4rem;
		@include e(header) {
			position: absolute;
			top: 0.42rem;
			left: 0;
			right: 0;
			padding: 0 0.4rem;
			width: 100%;
			height: 0.88rem;
			line-height: 0.88rem;
			background-color: red;
		}
		@include m(banner) {
			height: 4.14rem;
			margin: 0 -0.4rem;
			background-color: gray;
		}
	}

</style>