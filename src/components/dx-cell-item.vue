<template>
	<!-- 两列排列 -->
    <div class="dx-cell-item clearfix">
			<dx-item>
				<template slot="left">
          <slot name="left"></slot>
        </template>
				<template slot="right">
          <slot name="right"></slot>
        </template>
			</dx-item>
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