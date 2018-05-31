<template>
	<dx-rate 
		:type="type"
		:rating="rating"
		only-display
		:rateClass="iconClass"
		:selectRateClass="selectIconClass">
	</dx-rate>
</template>
<script>
export default {
	name: 'DxStar',
	componentName: 'DxStar',
	props: {
		rating: Number,
		type: String
	},
	data() {
		return {
			iconClass: 'star-rate-icon',
			selectIconClass: 'star-rate-icon-select'
		}
	}
}
</script>
<style lang="scss">
	.star-rate-icon {
		background: $--star-icon-gray-background;
	}
	.star-rate-icon-select {
		background: $--star-icon-red-background;
	}
	.dx-rate-item-small {
		width: 0.28rem!important;;
		height: 0.26rem!important;;	
		background-size: 100% 100%!important;;
	}
</style>