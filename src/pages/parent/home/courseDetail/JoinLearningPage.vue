<template>
    <div 
    	v-footer 
    	class="home-course-join"
    >
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
	   			<div>趣味科学大百科</div>
	   			<div>老师：奕爸CY</div>
	   			<div>儿童心理达人</div>
       		</div>
       	</div>
       	<div @click="goNext('/join/period')">
	       	<dx-item class="home-course-join__item">
	       		<div slot="left">上课时间</div>
	       		<div 
	       			slot="right" 
	       			class="home-course-join--color-blue text-right"
	       		>
	       			<p>4月11号</p>
					<p>19:00~21:00</p>
				</div>
	       	</dx-item>
       	</div>
       	<dx-item class="home-course-join__item">
       		<div slot="left">上课地点</div>
       		<p 
       			slot="right" 
       			class="home-course-join--course-place text-right"
       		>
       			西溪湿地商务园区1号教室 西湖区文二西路好西城广场4楼
       		</p>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">课程单价</div>
       		<div 
       			slot="right"
       			class="text-right"
       		>￥120/学员</div>
       	</dx-item>
       	<div @click="goNext('/join/edit')">
	       	<dx-item class="home-course-join__item">
	       		<div slot="left">学员</div>
	       		<div 
	       			slot="right"
	       			class="home-course-join--color-blue home-course-join--student text-right"
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
       			class="home-course-join--color-blue text-right"
       		>
       			<span @click="goNext('/join/pay')">支付宝（默认）</span>
			</div>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">注意：课程开始前，可申请退款</div>
       	</dx-item>
	   <price-footer
	   		to="/join/bookSuccess" 
	   		price="￥360" 
	   		priceInfo="￥120X3" 
	   		btnText="立即支付"
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
			font-size: 0.36rem;
			>div:nth-child(2) {
				text-align: right;
			}
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