<template>
   <div class="index-message">
	  <dx-ul>
	  	<li class="index-message-teacher">
			<div class="index-message-teacher--icon"></div>
			<div class="index-message-teacher__detail">
				<div>
					<span class="index-message-teacher__detail--name">系统消息</span>
					<span class="index-message-teacher__detail--male"></span>
					<span class="index-message-teacher__detail--role"></span>
				</div>
				<div class="index-message-teacher__detail--desc">
					英语协会副会长，多次获得国际英语口语竞赛金奖
				</div>
			</div>
		</li>
		<li class="index-message-teacher">
			<div class="index-message-teacher--icon"></div>
			<div class="index-message-teacher__detail">
				<div>
					<span class="index-message-teacher__detail--name">杨帆</span>
					<span class="index-message-teacher__detail--male"></span>
					<span class="index-message-teacher__detail--role"></span>
					<span class="block--float-right">5分钟</span>
				</div>
				<div class="index-message-teacher__detail--desc">
					英语协会副会长，多次获得国际英语口语竞赛金奖
				</div>
			</div>
		</li>
	</dx-ul>
    </div>
</template>
<script>
</script>
<style  lang="scss">
	@include b(index-message) {
		/* 明星老师介绍 */
		@include b(index-message-teacher) {
			display: flex;
			align-items: center;
			margin-top: 0.48rem;
			margin-bottom: 0.42rem;
			@include m(icon) {
				width: 1.09rem;
				height: 1.09rem;
				border-radius: 50%;
				background-color: #444;
			}
			@include e(detail) {
				display: inline-block;
				vertical-align: middle;
				margin-left: 0.28rem;
				font-size: 0.34rem;
				color: #7E7E7E;
				@include m(name) {
					color: #333;
				}
				@include m(male) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--index-home-teacher-male-background;
				}
				@include m(role) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.66rem;
					height: 0.32rem;
					background: $--index-home-teacher-role-background;
				}
				@include m(desc) {
					margin-top: 0.2rem; 
				}
			}
		}
	}	
</style>