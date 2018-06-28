<template>
	<ul class="dx-item-list">
		<li 
			v-for="(item, index) in items" 
			:key="index"
			class="dx-item-li"
		>
			<slot  :item="item">
				<dx-item :to='item.path'>
					<p 
						v-if="item.leftText"
						slot="left"
					>
						{{item.leftText}}
					</p>
					<p 
						v-if="item.rightText"
						slot="right"
						:style="{color: item.color}"
					>
						{{item.rightText}}
					</p>
				</dx-item>
			</slot>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'DxItemList',
	componentName: 'DxItemList',
	props: {
		items: {
			type: Array,
			default: function() {
				return []
			}
		}
	}
}
</script>
<style lang="scss">
.dx-item-list {
	.dx-item-li {
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
	}
}

</style>