<template>
	<!-- 两列排列 -->
  <div class="dx-cell-item clearfix" @click="goPath()">
		<dx-item>
			<template slot="left">
				<slot name="left"></slot>
			</template>
			<template slot="right">
				<div :class="{'can-access': canAccess}" class="cell-right">
					<slot name="right"></slot>
				</div>
	    	</template>
		</dx-item>
  </div>
</template>
<script>
	export default {
		name: 'DxCellItem',
		componentName: 'DxCellItem',
		props: {
			canAccess: Boolean,
			to: String
		},
		methods: {
			goPath() {
				if (this.to) {
					this.$router.push(this.to)
				}
			}
		}
	}
</script>
<style lang="scss">
.dx-cell-item {
	padding: 0.56rem 0;
	position: relative;
	font-size: $--common-subtitle-font-size;
  	color: $--common-text-font-color;
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
	.can-access{
		color: $--common-selectd-text-font-color;
	}
	.cell-right{
		max-width: 3.8rem;
	}
}

</style>