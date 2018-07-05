<template>
   <div class="chat-message">
   	  <dx-header><template slot="title">{{sender.name}}</template></dx-header>
	  <ul>
	  	<li 
	  		v-for="(message, index) in messages"
	  		:key="index"
	  		class="chat-message__detail"
	  	>
	  		<div class="chat-message__detail--time">
	  			{{message.generateDate | formatInChat}}
	  		</div>
	  		<div 
	  			v-if="message.sendId === userInfo.id"
	  			class="chat-message__detail--ta clearfix">
	  			<div class="chat-message__detail--icon block--float-left"
						:style="{backgroundImage: 'url(' + sender.persionalImage + ')'}"></div>
					<div class="chat-message__detail--text block--float-left">
						{{message.msgContent}}
						<div class="chat-message__detail--ta-triangle chat-message__detail--triangle"></div>
					</div>
	  		</div>	
	  		<div 
	  			v-else 
	  			class="chat-message__detail--me clearfix"
	  		>
	  		<div class="chat-message__detail--icon block--float-right"
					:style="{backgroundImage: 'url(' + userInfo.persionalImage + ')'}"></div>
					<div class="chat-message__detail--text block--float-right">
						{{message.msgContent}}
						<div class="chat-message__detail--me-triangle chat-message__detail--triangle"></div>
					</div>
	  		</div>	
		</li>
	</ul>
    </div>
</template>
<script>
	import uapi from 'api/userApi.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import { mapGetters } from 'vuex'
	export default {
		components: {
			DxHeader
		},
		computed: {
			...mapGetters([
				'userInfo'
			])
		},
		data() {
			return {
				sendId: this.$route.params.id,
				sender: {},
				messages: []
			}
		},
		mounted() {
			this.getSenderInfo()
			this.getMessageList()
		},
		methods: {
			getSenderInfo() {
				uapi.getUserInfo({id: this.sendId}).then(r => {
					this.sender = r.data
				})
				// this.$router.go(-1)
			},
			getMessageList() {
				uapi.getChatMessages({sendId: this.sendId}).then(r => {
					this.messages = r.data.list
				})
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
			margin-top: 0.35rem;
			@include m(time){
				font-size: 0.3rem;
				text-align: center;
				padding: 0.3rem 0;
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
				// margin-bottom: 0.21rem;
			}
			@include m(ta) {
				>div:nth-child(1) {
					// background-color: #444;
					background-size: 100% 100%;
				}
				>div:nth-child(2) {
					background-color: #f7f7f7;
					color: #484848;
					margin-left: 0.2rem;
				}
			}
			@include m(me) {
				>div:nth-child(1) {
					// background-color: #666;
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
				top: 0.27rem;
				border-color: transparent  #f7f7f7  transparent  transparent;
			}
			@include m(me-triangle) {
				position: absolute;
				right: -0.35rem;
				top: 0.27rem;
				border-color: transparent  transparent  transparent #57B8D7;
			}
		}
	}	
</style>