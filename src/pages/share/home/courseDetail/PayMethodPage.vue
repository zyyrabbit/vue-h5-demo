<template>
    <div class="home-course-payMethod">
    	<dx-header></dx-header>
    	<p class="home-course-payMethod--title">付款方式</p>
    	<ul class="home-course-payMethod__list">
    		<li class="home-course-payMethod__list-item">
	    		<div class="home-course-payMethod__list-item--desc">
	    			<span></span>
	    			<span>支付宝支付</span>
	    		</div>
				<dx-radio 
					v-model="select"
					:label="1"
					no-label
					class="home-course-payMethod__list-item--radio"
				>
					<span 
						slot="radio-icon" 
						class="home-course-payMethod__list-item--radio-icon"
					></span>
				</dx-radio>
    		</li>
    		<li class="home-course-payMethod__list-item">
	    		<div class="home-course-payMethod__list-item--desc">
	    			<span></span>
	    			<span>微信支付</span>
	    		</div>
				<dx-radio 
					v-model="select"
					:label="2"
					no-label
					class="home-course-payMethod__list-item--radio"
				>
					<span 
						slot="radio-icon" 
						class="home-course-payMethod__list-item--radio-icon"
					></span>
				</dx-radio>
    		</li>
    	</ul>
    	<button-footer 
    		to="" 
    		btnText="确定"
    	></button-footer>
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
				select: 1
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-payMethod) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(title) {
			margin-top: 0.66rem;
			font-size: 0.6rem;
			color: #484848;
		}
		@include e(list) {
			margin-top: 0.18rem;
		}
		@include e(list-item) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.59rem 0;
			color: #484848;
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc) {
				display: flex;
				align-items: center;
				>span:nth-child(1) {
					display: inline-block;
					width: 0.71rem;
					height: 0.71rem;
					background-color: #ccc;
					border-radius: 50%;
					margin-right: 0.13rem;
				}
			}
			
			@include m(radio-icon) {
				display: inline-block;
				background-color: gray;
				width: 0.74rem;
				height: 0.74rem;
			}
			/* 角色选中的样式 */
			.is-check {
				.home-course-payMethod__list-item--radio-icon {
				  	background-color: red;
				}
			}
		}
	}

</style>