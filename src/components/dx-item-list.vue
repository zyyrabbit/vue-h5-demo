<template>
	<div class="dx-item-list">
		<dx-item 
			v-for="(item, index) in items" 
			:key="index"
			:to='item.path'
			class="dx-item"
		>
			<p 
				v-if="item.leftText"
				slot="left"
			>
			{{item.leftText}}
			</p>
			<p 
				v-if="item.rightText"
				slot="right"
				:class="{'is-link': item.link}"
			>
				{{item.rightText}}
			</p>
		</dx-item>
	</div>
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
	.dx-item {
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
		.is-link {
			color: $--common-selectd-text-font-color;
		}
	}
}

</style>