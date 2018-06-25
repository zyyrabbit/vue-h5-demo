<template>
    <div class="home-search-result">
    	<dx-header></dx-header>
    	<div class="home-search-result--title">
    		学习英语
    	</div>
    	<div 
    		class="home-search-result-content"
    		@click="goNext('/courseDetail')"
    	>
    		<div class="home-search-result-content--pic"></div>
			<dx-item class="home-search-result-content__title">
				<div 
					slot="left"
					class="home-search-result-content__title--left"
				>趣味科学大百科</div>
				<div 
					slot="right"
					class="home-search-result-content__title--right"
				>
					<dx-ul>
						<li>一八CY</li>
						<li>3-12</li>
						<li>自然科学</li>
					</dx-ul>
				</div>
			</dx-item>
			<dx-item class="home-search-result-content__desc">
				<div 
					slot="left"
					class="home-search-result-content__desc--detail"
				>
					“通过趣味生动、幽默诙谐的语言，	带领孩子一起探索科学领域。”
				</div>
				<div 
					slot="right"
					class="home-search-result-content__desc--price"
				>Y 120</div>
			</dx-item>
   		</div>
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
	@include b(home-search-result) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(title) {
			padding-top: 0.65rem;
			padding-bottom: 0.4rem;
			font-size: 0.48rem;
			border-bottom: 0.02rem solid #EBEBEB;
		}
	}

	/* 百科 */
	@include b(home-search-result-content) {
		margin-top: 0.57rem;
		@include m(pic) {
			width: 100%;
			height: 3.7rem;
			background-color: gray;
			border-radius: 0.1rem;
		}
		@include e(title) {
			margin-top: 0.31rem;
			@include m(left) {
				max-width: 2.6rem;
				font-size: 0.36rem;
				color: #333333;
			}
			@include m(right) {
				font-size: 0.24rem;
			}
		}

		@include e(desc) {
			margin-top: 0.35rem;
			height: 0.9rem;
			@include m(detail) {
				width: 3.22rem;
				font-size: 0.22rem;
				color: #484848;
			}
			@include m(price) {
				width: 1.82rem;
				height: 0.9rem;
				font-size: 0.3rem;
				color: #fff;
				background-color: red;
				@include center;
			}
		}
	}

</style>