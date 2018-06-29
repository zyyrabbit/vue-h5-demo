<template>
	<div class="dx-item-list">
		<dx-cell-item 
			v-for="(item, index) in items" 
			:key="index"
			:to='item.path'
			:canAccess= 'item.link'
		>
			<template 
				v-if="item.leftText"
				slot="left"
			>	
				<div class="dx-item-icon" 
					v-if="item.icon" 
					></div>
				<p>{{item.leftText}}</p>
			</template>
			<p 
				v-if="item.rightText"
				slot="right"
			>
				{{item.rightText}}
			</p>
		</dx-cell-item>
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
.dx-item-list{
	border-top: 0.02rem solid #e5e5e5;
	.dx-item-list-left{
		display: flex;
	}
	.dx-item-icon{
		width: 0.4rem;
		height: 0.4rem;
		background-size: 100% 100%;
	}
}
</style>