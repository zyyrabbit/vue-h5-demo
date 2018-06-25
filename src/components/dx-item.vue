<template>
	<!-- 两列排列 -->
    <div 
        class="dx-item"
        :class="[alignItem ? 'dx-item-' + alignItem : '']"
        @click="goNext(to)"
    >
    	<div 
    		v-if="$slots.left"
            class="dx-item-left"
    	>
    		<slot name="left"></slot>
    	</div>
    	<div 
    		v-if="$slots.right"
    		class="dx-item-right"
    	>
    		<slot name="right"></slot>
    	</div>
    </div>
</template>
<script>
    import mixin from 'utils/mixin.js'
	export default {
		name: 'DxItem',
		componentName: 'DxItem',
        mixins: [mixin],
        props: {
            alignItem: String,
            to: [String, Object]
        }
	}
</script>
<style>
    .dx-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dx-item-left {
        flex-grow: 1;
        text-align: left;
    }
    .dx-item.dx-item-top {
        align-items: flex-start;
    }
    .dx-item.dx-item-bottom {
        align-items: flex-end;
    }
</style>

