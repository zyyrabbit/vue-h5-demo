<template>
   <div class="system-message">
   	  <dx-header><template slot="title">系统消息</template></dx-header>
	  <ul>
	  	<li 
	  		v-for="(message, index) in messages"
	  		:key="index"
	  		class="system-message__detail"
	  	>
	  		<div 
	  			v-if="message.time" 
	  			class="system-message__detail--time"
	  		>
	  				{{message.time}}
	  		</div>
	  		<div 
	  			v-else 
	  			class="clearfix"
	  		>
	  			<div class="system-message__detail--icon block--float-left"></div>
				<div class="system-message__detail--text block--float-left">
					<p>{{message.content}}</p>
					<p>查看详情</p>
				</div>
	  		</div>	
		</li>
	</ul>
    </div>
</template>
<script>
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		components: {
			DxHeader
		},
		data() {
			return {
				messages: [
					{
						time: '2018年3月29号 15:29',
						content: '请对课程进行评价'
					},
					{
						content: '您有预定的课程,记得准时参加。'
					},
					{
						content: '请对参加过的课程进行评价。'
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
	@include b(system-message) {
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
				background-color: #444;
			}
			@include m(text) {
				background-color: rgba(218,218,218,0.3);
				margin-left: 0.07rem;
				width: 5.75rem;
				border-radius: 0.1rem;
				padding: 0.26rem;
				>p:nth-child(1) {
					font-size: 0.34rem;
					color: #57B8D7;
					margin-bottom: 0.21rem;
				}
				>p:nth-child(2) {
					border-top: 1px solid rgba(218,218,218,1);
					padding-top: 0.21rem;
					font-size: 0.3rem;
					color: #484848;
				}
			}
		}
	}	
</style>