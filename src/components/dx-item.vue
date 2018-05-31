<template>
	<!-- 两列排列 -->
    <div class="dx-item clearfix">
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
		name: 'DxItem',
		componentName: 'DxItem'
	}
</script>
