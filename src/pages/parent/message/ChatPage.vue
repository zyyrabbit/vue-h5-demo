<template>
   <div class="chat-message">
   	  <div class="chat-message--title clearfix">
   	  	<span 
   	  		class="block--float-left"
   	  		@click="goBack()"
   	  	> < </span>
   	  	杨帆
   	  </div>
	  <ul>
	  	<li 
	  		v-for="(message, index) in messages"
	  		:key="index"
	  		class="chat-message__detail"
	  	>
	  		<div 
	  			v-if="message.time" 
	  			class="chat-message__detail--time"
	  		>
	  				{{message.time}}
	  		</div>
	  		<div 
	  			v-else-if="message.me"
	  			class="chat-message__detail--ta clearfix"
	  		>
	  			<div class="chat-message__detail--icon block--float-left"></div>
				<div class="chat-message__detail--text block--float-left">
					{{message.content}}
					<div class="chat-message__detail--ta-triangle chat-message__detail--triangle"></div>
				</div>
	  		</div>	
	  		<div 
	  			v-else 
	  			class="chat-message__detail--me clearfix"
	  		>
	  			<div class="chat-message__detail--icon block--float-right"></div>
				<div class="chat-message__detail--text block--float-right">
					{{message.content}}
					<div class="chat-message__detail--me-triangle chat-message__detail--triangle"></div>
				</div>
	  		</div>	
		</li>
	</ul>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				messages: [
					{
						time: '2018年3月29号 15:29',
						content: '请对课程进行评价'
					},
					{
						me: true,
						content: '大壮壮您好,你报名的课程是明天下午两点的,记得准时参加。'
					},
					{
						content: '好的,谢谢老师提醒,到时候我会准时参加的。'
					}
				]
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style  lang="scss">
	@include b(chat-message) {
		padding: 0.32rem 0.4rem 0;
		@include m(title) {
			font-size: 0.36rem;
			text-align: center;
			line-height: 0.36rem;
			margin-bottom: 0.26rem;
		}
		@include e(detail) {
			margin-top: 0.5rem;
			@include m(time){
				font-size: 0.3rem;
				text-align: center;
			}
			@include m(icon) {
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
			}
			@include m(text) {
				position: relative;
				width: 5.5rem;
				border-radius: 0.1rem;
				padding: 0.26rem;
				font-size: 0.34rem;
				margin-bottom: 0.21rem;
			}
			@include m(ta) {
				>div:nth-child(1) {
					background-color: #444;
				}
				>div:nth-child(2) {
					background-color: rgba(218,218,218,0.3);
					color: #484848;
					margin-left: 0.2rem;
				}
			}
			@include m(me) {
				>div:nth-child(1) {
					background-color: #666;
				}
				>div:nth-child(2) {
					background-color: #57B8D7;
					color: #fff;
					margin-right: 0.2rem;
				}
			}
			// 三角形
			@include m(triangle) {
				width: 0;
   		 		height: 0;
			    border-width: 0.2rem;
			    border-style: solid;
			}
			@include m(ta-triangle) {
				position: absolute;
				left: -0.35rem;
				top: 0.07rem;
				border-color: transparent  rgba(218,218,218,0.3)  transparent  transparent;
			}
			@include m(me-triangle) {
				position: absolute;
				right: -0.35rem;
				top: 0.07rem;
				border-color: transparent  transparent  transparent #57B8D7;
			}
		}
	}	
</style>