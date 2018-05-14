<template>
   <div class="index-message">
   		<div class="index-message__title clearfix">
   			<div class="block--float-left">消息</div>
   			<div 
   				class="block--float-right"
   				@click="goPath('/message/query')"
   			></div>
   		</div>
	    <dx-ul>
		  	<li 
		  		v-for="(message, index) in messages"
		  		:key="index"
		  		class="index-message-teacher"
		  	>
				<div class="index-message-teacher--icon"></div>
				<div class="index-message-teacher__detail">
					<div>
						<span class="index-message-teacher__detail--name">
							{{message.title}}
						</span>
						<span v-if="!message.system">
							<span class="index-message-teacher__detail--male"></span>
							<span class="index-message-teacher__detail--role"></span>
						</span>
						<span class="block--float-right">{{message.time}}</span>
					</div>
					<div class="index-message-teacher__detail--desc">
						<router-link :to="message.path">{{message.content}}</router-link>
					</div>
				</div>
			</li>
		</dx-ul>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				messages: [
					{
						title: '系统消息', 
						time: '3天前', 
						content: '请对课程进行评价',
						path: '/message/system',
						system: true
					},
					{
						title: '杨帆', 
						time: '5分钟', 
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/message/chat'
					},
					{
						title: '张逸勇', 
						time: '5分钟', 
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/message/chat'
					}
				]
			}
		},
		methods: {
			goPath(path) {
				this.$router.push(path)
			}
		}
	}
</script>
<style  lang="scss">
	@include b(index-message) {
		@include e(title) {
			font-size: 0.48rem;
			line-height: 0.88rem;
			padding-top: 0.32rem;
			>div:nth-child(2) {
				width: 0.88rem;
				height: 0.88rem;
				background: $--message-search-background;
			}
		}
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