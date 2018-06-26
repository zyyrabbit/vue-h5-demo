<template>
    <div 
    	v-footer
    	class="home-course-detail"
    >
    	<div class="home-course-detail--banner"></div>
    	<div class="home-course-detail__header">
	       	<dx-header>
	       		<span slot="next">
	       			<span></span>
	       			<span></span>
	       		</span>
	       	</dx-header>
       	</div>
       	
	   	<div class="home-course-detail--item home-course-detail__teacher">
	   		<p>趣味科学大百科</p>
	   		<dx-item>
	   			<div 
	   				slot="left"
	   				class="home-course-detail__teacher--des" 
	   			>
	   				<div>老师：奕爸CY</div>
	   				<div>儿童心理达人</div>
	   				<div>联系老师</div>
	   			</div>
	   			<div 
	   				slot="right"
	   				class="home-course-detail__teacher--icon"
	   			></div>
	   		</dx-item>
	   	</div>  
	   	<div class="home-course-detail--item home-course-detail__introduce">
	   		<p>课程介绍</p>
	   		<p>为了认识世界，孩子们需建立一些科学概念，这些概念可帮助他们总结的经验。还需要学习搜集和组织信息，以及运用和辨别思想的方法。</p>
	   		<div>阅读更多</div>
	   	</div>
	   	<div class="home-course-detail--item home-course-detail__parent-judge">
	        <div class="home-course-detail__parent-judge-comment">
	          <p>家长评价</p>
	          <p>99+</p>
	          <dx-star :rating="3" type="small"></dx-star>
	        </div>
	        <div>
	        	<dx-comment></dx-comment>
	        </div>
	        <div 
	        	class="home-course-detail__parent-judge--more"
	        	@click="goNext('/courseDetail/judge')"
	        >查看全部评价</div>
      	</div>
	   <price-footer 
	   		to="/join" 
	   		price="￥60" 
	   		priceSmall="/小时" 
	   		priceInfo="评分9.6" 
	   		btnText="加入学习"
	   	>
    	</price-footer>
    	<transition
			name="router-slide"  
			mode='out-in'
		>
			<router-view class="full-screen"/>
		</transition>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import PriceFooter from 'pages/common/PriceFooter.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader,
			PriceFooter
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
			// background-color: red;
		}
		@include m(banner) {
			height: 4.14rem;
			margin: 0 -0.4rem;
			background: url('../../../../assets/images/index/home/wiki.png');
			background-size: 100% 100%;			
			// background-color: gray;
			
		}
		// 设置整体的样式
		@include m(item) {
			padding: 0.57rem 0;
			&:not(:last-child) {
				border-bottom: 1px solid #EBEBEB;
			}
		}
		// 老师介绍
		@include e(teacher) {
			>p:nth-child(1) {
				font-size: 0.6rem;
				margin-bottom: 0.44rem;
			}

			@include m(des) {
				font-size: 0.34rem;
				>div {
					margin-bottom: 0.13rem;
				}
				div:nth-child(2) {
					color: #FF9CC8;
				}

				div:nth-child(3) {
					color: #57B8D7;
				}
			}

			@include m(icon) {
				width: 1.29rem;
				height: 1.29rem;
				border-radius: 50%;
				background: url('../../../../assets/images/index/home/teacher1.png');
				background-size: 100% 100%;
				// background-color: red;
			}
		}

		// 课程介绍
		@include e(introduce) {
			font-size: 0.34rem;
			>p:nth-child(1) {
				font-size: 0.36rem;
				margin-bottom: 0.25rem;
			}
			>p:nth-child(2) {
				margin-bottom: 0.16rem;
			}
			div:last-child {
				color: #57B8D7;
			}
		}
		// 家长评价
		@include e(parent-judge) {
			font-size: 0.34rem;
			@include m(more) {
				margin-top: 0.33rem;
				color: #57B8D7;
			}
		}
		// 家长评价star
		@include e(parent-judge-comment) {
			display: flex;
			align-items: center;
			>p:nth-child(1) {
				flex-grow: 1;
				font-size: 0.36rem;
			}
			>p:nth-child(2) {
				font-size: 0.4rem;
			}
		}
	}

</style>