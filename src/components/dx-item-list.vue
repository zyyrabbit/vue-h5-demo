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
				<div class="dx-item-list-left">
					<div class="dx-item-icon" 
						v-if="item.icon"
						:class="'dx-item-icon-' + item.icon" 
						></div>
					<p>{{item.leftText}}</p>
				</div>
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
		align-items: center;
	}
	.dx-item-icon{
		margin-right: 0.2rem;
		width: 0.4rem;
		height: 0.4rem;
		background-size: 100% 100%;
		// 图标样式
		&-course{
			background-image: url("@~assets/images/index/profile/me_course.png")
		}
		&-openclass{
			background-image: url("@~assets/images/index/profile/me_openclass.png")
		}
		&-room{
			background-image: url("@~assets/images/index/profile/me_room.png")
		}
		&-suggestion{
			background-image: url("@~assets/images/index/profile/me_suggestion.png")
		}
		&-punch{
			background-image: url("@~assets/images/index/profile/me_punch.png")
		}
		&-wallet{
			background-image: url("@~assets/images/index/profile/me_wallet.png")
		}
		&-invitation{
			background-image: url("@~assets/images/index/profile/me_invitation.png")
		}
	}
}
</style>