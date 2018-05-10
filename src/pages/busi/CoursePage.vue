<template>
   <div class="index-course">
   	    <div class="index-course--title">
   	    	我的课程
   	    </div>
   	    <ul class="index-course__status clearfix">
   	    	<li>待上课</li>
   	    	<li>正在上课</li>
   	    	<li>已上课</li>
   	    </ul>
   	    <ul class="index-course-list">
   	    	<li class="index-course-list__item">
   	    		<div class="index-course-list__item-detail">
   	    			<div>
   	    				<span class="index-course-list__item-detail--date">4月26号 周四</span>
   	    				<span class="index-course-list__item-detail--sign-up-number">2人报名</span>
   	    			</div>
   	    			<div class="index-course-list__item-detail--content">
   	    				<p class="index-course-list__item-detail--title">带孩子走进故事王国</p>
   	    				<p class="index-course-list__item-detail--classroom">西溪湿地商务园区1号教室</p>
   	    				<p class="index-course-list__item-detail--open-time">开放时间: 2018年4月26日 07:00~20:00</p>
   	    				<p class="index-course-list__item-detail--place">详细地址: 西湖区文二西路551号好西城广场4楼</p>
   	    			</div>
   	    			<div class="index-course-list__item-detail--time">
   	    				<div class="index-course-list__item-detail--time-begin">
   	    					<div>07:00</div>开始
   	    				</div>
   	    				<div class="index-course-list__item-detail--time-during">--2小时--</div>
   	    				<div class="index-course-list__item-detail--time-end">
   	    					<div>09:00</div>结束
   	    				</div>
   	    			</div>
   	    		</div>
   	    		<div class="index-course-list__item-operate">
   	    			<dx-button size="small">在此学习</dx-button>
   	    			<dx-button size="small">评价课程</dx-button>
   	    			<dx-button size="small">已确认上课</dx-button>
   	    		</div>
   	    	</li>
   	    </ul>
   </div>
</template>
<script>
</script>
<style  lang="scss">
	@include b(index-course) {
		@include m(title) {
			font-size: 0.48rem;
			color: #484848;
		}
		@include e(status) {
			margin: {
				top: 0.51rem;
				bottom: 0.56rem;
			}
			font-size: 0.28rem;
			>li {
				float: left;
				margin-right: 0.66rem;
			}
		}
		@include b(index-course-list) {
			width: 100%;
			height: 6.24rem;
			padding: 0.34rem 0.31rem;
			@include e(item) {
				border-bottom: 1px solid #E6E6E6;
			}
			@include e(item-detail) {
				font-size: 0.24rem;
				color: #484848;
				@include m(title classroom) {
					font-size: 0.36rem;
				}
				@include m(time-begin time-end) {
					>div {
						font-size: 0.48rem;
					}
				}
			}
		}
	}


</style>