<template>
	<span class="dx-tag" :style="styleObject"><slot></slot></span>
</template>
<script>
export default {
	name: 'DxTag',
	componentName: 'DxTag',
	props: {
		display: String,
		color: String
	},
	data() {
		return {
			styleObject: {
				color: this.color,
				display: this.display
			}
		}
	}
}
</script>
<style scope lang="scss">
.dx-tag{
	display: inline-block;
	line-height: 0.22rem;
	padding: 0.06rem 0.12rem;
	font-size: 0.22rem;
	color: $--common-selectd-text-font-color;
	border: 0.01rem $--common-selectd-text-font-color solid;
	vertical-align: middle;
}
</style>