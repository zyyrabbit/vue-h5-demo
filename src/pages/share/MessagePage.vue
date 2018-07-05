<template>
    <div class="index-message">
   		<div class="index-message__title clearfix">
   			<div class="block--float-left">消息</div>
   			<div 
   				class="block--float-right"
   				@click="goNext('/msgquery')"
   			></div>
   		</div>
	    <dx-ul>
		  	<li class="index-message-teacher clearfix" 
					@click="goNext('/message/system')"
					v-for="(remind,index) in remindList" 
					v-if="index===0">
					<div class="index-message-teacher--icon index-message-teacher--sys block--float-left"></div>
					<div class="index-message-teacher__detail">
						<div class="index-message-teacher__detail--info">
							<span class="index-message-teacher__detail--name" style="flex-grow:1;">
								系统消息
							</span>
							<span class="block--float-right">{{remind.generateDate | formatInPeriod}}</span>
						</div>
						<div class="index-message-teacher__detail--desc">
							<p>{{remind.remindContent}}</p>
						</div>
					</div>
				</li>				
		  	<li 
					@click="goNext('/message/chat/' + message.sendId)"
		  		v-for="(message, index) in msgList"
		  		:key="message.id"
		  		class="index-message-teacher clearfix">
					<div class="index-message-teacher--icon block--float-left"
						:style="{backgroundImage: 'url(' + message.persionalImage + ')'}"></div>
					<div class="index-message-teacher__detail">
						<div class="index-message-teacher__detail--info">
							<span class="index-message-teacher__detail--name">
								{{message.userName}}
							</span>
							<span class="index-message-teacher__detail--detl">
								<span class="index-message-teacher__detail--male" v-if="message.sex && message.sex === '男'"></span>
								<span class="index-message-teacher__detail--female" v-if="message.sex && message.sex === '女'"></span>
								<dx-tag class="index-message-teacher__detail--role" v-if="message.role === '0'">老师</dx-tag>
							</span>
							<span class="block--float-right">{{message.generateDate | formatInPeriod}}</span>
						</div>
						<div class="index-message-teacher__detail--desc">
							<p>{{message.msgContent}}</p>
						</div>
					</div>
				</li>
			</dx-ul> 
			<dx-footer :selectTab="2"></dx-footer>
			<transition 
				name="router-slide"  
				mode='out-in'
			>
				<router-view class="full-screen"/>
			</transition>
    </div>
   
</template>
<script>
	import uapi from 'api/userApi.js'
	import {mapState, mapMutations} from 'vuex'
	import DxFooter from '../common/FooterPage.vue'
	import mixin from 'utils/mixin.js'
	export default {
		mixins: [mixin],
		components: {
			DxFooter
		},
		mounted() {
			this.getMessageList()
		},
		computed: {
			...mapState({
				remindList: state => state.messageList.remindList,
				msgList: state => state.messageList.msgList
			})
		},
		methods: {
			...mapMutations([
				'SET_MESSAGELIST'
			]),
			getMessageList() {
				uapi.getUserMessages().then(r => {
					console.info(r.data)
					this.SET_MESSAGELIST(r.data)
				})
			}
		},
		data() {
			return {
				messages: [
					{
						title: '系统消息',
						time: '3天前',
						content: '请对课程进行评价',
						path: '/system',
						system: true
					},
					{
						title: '杨帆',
						time: '5分钟',
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/chat'
					},
					{
						title: '张逸勇',
						time: '5分钟',
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/chat'
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(index-message) {
		padding-top: 0.32rem;
		@include e(title) {
			font-size: 0.48rem;
			line-height: 0.88rem;
			>div:nth-child(2) {
				width: 0.88rem;
				height: 0.88rem;
				background: $--message-search-background;
			}
		}
		/* 明星老师介绍 */
		@include b(index-message-teacher) {
			width: 100%;
			margin-top: 0.48rem;
			margin-bottom: 0.42rem;
			@include m(sys) {
				background: $--message-system-icon;
				// background: url('../../assets/images/index/home/teacher1.png');
			}
			@include m(icon) {
				width: 1.09rem;
				height: 1.09rem;
				margin-right: 0.28rem;
				border-radius: 50%;
				// background: url('../../assets/images/index/home/teacher1.png');
				background-size: 100% 100%;
			}
			@include e(detail) {
				overflow: hidden;
				vertical-align: middle;
				font-size: 0.34rem;
				color: #7E7E7E;
				word-wrap: break-word;
				@include m(info) {
					display: flex;
					align-items: center;
				}				
				@include m(name) {
					color: #333;
				}
				@include m(detl) {
					display: flex;
					flex-grow: 1;
					align-items: center;
				}
				@include m(male) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--index-home-teacher-male-background;
					background-size: 100% 100%;
				}
				@include m(female) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--index-home-teacher-female-background;
					background-size: 100% 100%;
				}
				@include m(role) {
					display: inline-block;
					margin-left: 0.1rem;
				}
				@include m(desc) {
					width: 100%;
					margin-top: 0.2rem; 
					a{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						color: $--common-subtitle-font-color;
					}
				}
			}
		}
	}	
</style>