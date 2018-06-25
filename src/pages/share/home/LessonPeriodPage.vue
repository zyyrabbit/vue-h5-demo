<template>
    <div class="home-course-period">
    	<dx-header></dx-header>
    	<ul class="home-course-period__content">
    		<li 
    			v-for="index in 3" 
    			:key="index"
    			:class="{'is-disabled': disabled === index}"
    			class="home-course-period__content-item"
    		>
	    		<div class="home-course-period__content-item--desc">
	    			<p>
	    				<span 
	    					:class="{'is-disabled': disabled === index}"
	    					class="home-course-period__content-item--price"
	    				>¥60</span>/学员
	    			</p>
	    			<p>4月11号 19:00~21:00</p>
	    			<p>南师大文渊楼303室</p>
	    			<p>江苏省南京市近郊栖霞区文苑路代码</p>
	    		</div>
				<dx-radio 
					v-model="select"
					:label="index"
					no-label
					class="home-course-period__content-item--radio"
				>
					<span 
						slot="radio-icon" 
						class="home-course-period__content-item--radio-icon"
					></span>
				</dx-radio>
    		</li>
    	</ul>
    	<button-footer 
    		to="" 
    		btnText="下一步"
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
				select: 1,
				disabled: 3
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-period) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include e(content) {
			margin-top: 0.11rem;
		}
		@include e(content-item) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.56rem 0;
			font-size: 0.26rem;
			color: #484848;
			@include when(disabled) {
				color: #7E7E7E;
			}
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc) {
				>p {
					margin-bottom: 0.16rem;
				}
				>p:nth-child(2) {
					font-size: 0.36rem;
				}
			}
			@include m(price) {
				color: #FF9CC8;
				font-size: 0.48rem;
				@include when(disabled) {
					color: #7E7E7E;
				}
			}

			@include m(radio-icon) {
				display: inline-block;
				background-color: gray;
				width: 0.88rem;
				height: 0.88rem;
			}
			/* 角色选中的样式 */
			.is-check {
				.home-course-period__content-item--radio-icon {
				  	background-color: red;
				}
			}
		}
	}

</style>