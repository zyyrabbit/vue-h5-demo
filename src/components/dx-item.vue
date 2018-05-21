<template>
	<!-- 两列排列 -->
    <div class="dx-item clearfix">
    	<div 
    		v-if="$slots.left"
    		class="dx-item__left block--float-left"
    	>
    		<slot name="left"></slot>
    	</div>
    	<div 
    		v-if="$slots.right"
    		class="dx-item__right block--float-right"
    	>
    		<slot name="right"></slot>
    	</div>
    </div>
</template>
<script>
	export default {
		name: 'DxItem',
		componentName: 'DxItem'
	}
</script>
<style lang="scss">
	/* 头部导航栏 */
	@include b(dx-item) {
		line-height: 1.39rem;
		border-bottom: 0.02rem solid #EBEBEB;	
	}
</style>