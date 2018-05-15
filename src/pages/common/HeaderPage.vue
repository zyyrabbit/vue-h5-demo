<template>
	<!-- 头部导航 -->
    <header class="index-header clearfix">
    	<slot> 
    		<div 
    			class="index-header__go-back block--float-left"
    			@click="goBack()"
    		> < </div>
    	</slot>
    	<div 
    		v-if="$slots.title"
    		class="index-header__title"
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
		position: relative;
		@include e(go-back) {
			width: 0.2rem;
			height: 0.36rem;
		}
		@include e(title) {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}		
	}
</style>