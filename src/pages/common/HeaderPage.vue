<template>
	<!-- 头部导航 -->
	<header class="index-header clearfix">
		<div v-if="!isClose"
			class="index-header__go-back block--float-left"
			@click="goBack()"
		></div>
		<div v-if="isClose"
			class="index-header__close block--float-left"
			@click="goBack()"
		></div>
		<div 
			v-if="$slots.title"
			class="index-header__title detail-desc-text"
		>
			<slot name="title"></slot>
		</div>
		<div 
			v-if="$slots.next"
			class="block--float-right"
		>
			<slot name="next"></slot>
		</div>
	</header>
</template>
<script>
	export default {
		props: {
			isClose: Boolean
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss" scoped>
	/* 头部导航栏 */
	@include b(index-header) {
		padding: 0.27rem 0;
		position: relative;
		@include e(go-back) {
			width: 0.2rem;
			height: 0.36rem;
			background: $--nav-back-icon;
			background-size: 100% 100%;
		}
		@include e(close) {
			width: 0.33rem;
			height: 0.33rem;
			background: $--nav-close-icon;
			background-size: 100% 100%;
		}
		@include e(title) {
			line-height: 1;
			position: absolute;
			top: 0.27rem;
			left: 50%;
			transform: translateX(-50%);
		}		
	}
</style>