<template>
    <div class="home-course-join">
    	<dx-header></dx-header>
    	<p class="home-course-join--title">加入学习</p>
       	<div class="home-course-join__detail">
       		<div class="home-course-join__detail--icon">
       			<div></div>
       		</div>
       		<div class="home-course-join__detail-desc">
       			<div>
       				99+
       				<dx-star  
       					type="small"
       					:rating="3"
       					class="home-course-join__detail-desc--star"
       				></dx-star>
       			</div>
	   			<div>小学6年纪升初中...</div>
	   			<div>老师：奕爸CY</div>
	   			<div>儿童心理达人</div>
       		</div>
       	</div>
       	<div @click="goNext('/home/contPeriod')">
	       	<dx-item class="home-course-join__item">
	       		<div slot="left">上课时间</div>
	       		<div 
	       			slot="right" 
	       			class="home-course-join--color-blue"
	       		>
	       			<p>2018年1月11号</p>
					<p>至 2018年7月11号</p>
				</div>
	       	</dx-item>
       	</div>
       	<dx-item class="home-course-join__item">
       		<div slot="left">上课地点</div>
       		<p 
       			slot="right" 
       			class="home-course-join--course-place"
       		>
       			西溪湿地商务园区1号教室 西湖区文二西路好西城广场4楼
       		</p>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">课程单价</div>
       		<div slot="right">￥1200/半年/学员</div>
       	</dx-item>
       	<div @click="goNext('/home/edit')">
	       	<dx-item class="home-course-join__item">
	       		<div slot="left">学员</div>
	       		<div 
	       			slot="right"
	       			class="home-course-join--color-blue home-course-join--student"
	       		>
	       			<p>Yummy</p>
					<p>陈粒</p>
				</div>
	       	</dx-item>
       	</div>
       	<dx-item class="home-course-join__item">
       		<div slot="left">联系电话</div>
   			<input 
   				slot="right"
   				class="home-course-join--telephone"
   				placeholder="请输入联系人手机号码" 
   			/>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">付款方式</div>
       		<div 
       			slot="right"
       			class="home-course-join--color-blue"
       		>
       			<span @click="goNext('/home/pay')">支付宝（默认）</span>
			</div>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">注意：课程开始前，可申请退款</div>
       	</dx-item>
	   <price-footer to="/place/book" price="￥2400" priceInfo="￥1200X2人" btnText="立即支付">
    	</price-footer>
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
	@include b(home-course-join) {
		font-size: 0.3rem;
		padding: 0.31rem 0.4rem 0;
		@include m(color-blue) {
			color: #57B8D7;
		}
		@include m(title) {
			font-size: 0.6rem;
			color: #484848;
			margin-top: 0.61rem;
		}
		// 具体介绍
		@include e(detail) {
			display: flex;
			align-items: center;
			margin: {
				top: 0.49rem;
				bottom: 0.65rem;
			}
			@include m(icon) {
				flex-grow: 1;
				>div{
					border-radius: 0.03rem;
					background-color: #ccc;
					width: 2.33rem;
					height: 1.9rem;
				}
			}
		}
		@include e(detail-desc) {
			text-align: right;
			>div {
				margin-bottom: 0.1rem;
			}
			@include m(star) {
				display: inline-block;
			}
			>div:nth-child(2) {
				font-size: 0.44rem;
			}
			>div:last-child {
				color: #FF9CC8;
			}
		}
		// 每一行的样式
		@include e(item) {
			padding: 0.52rem 0;
			border-top: 0.02rem solid #EBEBEB;
			text-align: right;
			font-size: 0.36rem;
		}

		// 上课地点样式
		@include m(course-place) {
			width: 3.8rem;
		}
		// 学员
		@include m(student) {
			>p:nth-child(1) {
				margin-bottom: 0.38rem;
			}
		}

		// 输入联系电话
		@include m(telephone) {
			border: none;
			display: inline-block;
			width: 3.56rem;
			color: #D3D3D3;
			font-size: 0.36rem;
			// 设置暂未符样式
			@include placeholder {
				color: #D3D3D3;
			}
		}
	}

</style>