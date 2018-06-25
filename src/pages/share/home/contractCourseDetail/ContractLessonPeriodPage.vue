<template>
    <div class="home-contract-course-period">
    	<dx-header></dx-header>
    	<div class="home-contract-course-period--title">
    		课时
    	</div>
    	<ul class="home-contract-course-period__content">
    		<li 
    			v-for="index in 3" 
    			:key="index"
    			class="home-contract-course-period__content-item"
    		>
	    		<div class="home-contract-course-period__content-item--desc">
	    			<p>小学6年纪升初中特训班</p>
	    			<p>一年合约版</p>
	    			<p>奥数希望杯历年试题习题讲解</p>
	    		</div>
	    		<div 
	    			:class="{'is-validity': index === 1}"
	    			class="home-contract-course-period__content-item--time"
	    		>
	    			<p>已上课</p>
	    			<p>3月3号 2018</p>
	    			<p>15:00~17:00</p>
	    		</div>
    		</li>
    	</ul>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		},
		data() {
			return {
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-contract-course-period) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(title) {
			margin-top: 0.69rem;
			font-size: 0.6rem;
		}
		@include e(content) {
			margin-top: 0.23rem;
		}
		@include e(content-item) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.54rem 0;
			font-size: 0.36rem;
			color: #484848;
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc time) {
				>p {
					margin-bottom: 0.13rem;
				}
			}
			@include m(desc) {
				p:last-child {
					font-size: 0.26rem; 
				}
			}
			@include m(time) { 
				@include when(validity) {
					color: #57B8D7;
				}
			}
		}
	}

</style>