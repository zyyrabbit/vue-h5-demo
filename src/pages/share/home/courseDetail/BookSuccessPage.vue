<template>
    <div class="home-course-book-success">
    	<dx-header>
    		<span 
    			slot="next"
    			class="home-course-book-success--log"
    		>查看上课记录</span>
    	</dx-header>
    	<p class="home-course-book-success--title">恭喜您预定成功!</p>
    	<div>
	    	<div class="home-course-book-success__item">
	    		<p>课程名称</p>
	    		<p>带孩子走进故事王国</p>
	    	</div>
	    	<div class="home-course-book-success__item">
	    		<p>预定地点</p>
	    		<p>带孩子走进故事王国</p>
	    		<p>江苏省南京市近郊栖霞区文苑路</p>
	    	</div>
	    	<div class="home-course-book-success__item">
	    		<p>预定时间</p>
	    		<p>今天(4月6号)</p>
	    		<p>13:00~15:00</p>
	    	</div>
    	</div>
	   <button-footer btnText="联系老师"></button-footer>
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
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-book-success) {
		font-size: 0.34rem;
		padding: 0.31rem 0.4rem 0;
		color: #484848;
		@include m(log) {
			color: #57B8D7;
			font-size: 0.36rem;
		}
		@include m(title) {
			font-size: 0.6rem;
			font-weight: bold;
			margin-top: 0.67rem;
		}

		@include e(item) {
			padding: 0.55rem 0;
			&:not(:last-child) {
				border-bottom: 0.02rem solid #EBEBEB;
			}
			>p:nth-child(1) {
				margin-bottom: 0.24rem;
				font-size: 0.36rem;
			}
			>p:last-child {
				margin-top: 0.13rem;
			}
		}
	}

</style>