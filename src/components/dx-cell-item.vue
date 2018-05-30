<template>
	<!-- 两列排列 -->
    <div class="dx-cell-item clearfix">
    	<div 
    		v-if="$slots.left"
    		class="block--float-left"
    	>
    		<slot name="left"></slot>
    	</div>
    	<div 
    		v-if="$slots.right"
    		class="block--float-right"
    	>
    		<slot name="right"></slot>
    	</div>
    </div>
</template>
<script>
	export default {
		name: 'DxCellItem',
		componentName: 'DxCellItem'
	}
</script>
<style lang="scss">
.dx-cell-item {
	padding: 0.56rem 0;
	position: relative;
	&:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 0.02rem;
		border-top: 0.02rem solid #e5e5e5;
		color: #e5e5e5;
		z-index: 2;
	}
	&:first-child {
		&:before {
			display: none;
		}
	}	
}
</style>