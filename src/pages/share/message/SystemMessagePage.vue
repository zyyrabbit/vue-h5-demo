<template>
   <div class="system-message">
   	  <dx-header><template slot="title">系统消息</template></dx-header>
	  <ul>
	  	<li 
	  		v-for="(remind, index) in remindList"
	  		:key="remind.id"
	  		class="system-message__detail"
	  	>
	  		<div class="system-message__detail--time">
	  			{{remind.generateDate | formatInChat}}
	  		</div>
	  		<div class="clearfix">
	  			<div class="system-message__detail--icon block--float-left"></div>
					<div v-if="remind.remindType !== 'SYSTEM'" class="system-message__detail--text block--float-left">
						<p class="system-message__detail--text-cont">{{remind.remindContent}}</p>
						<p class="system-message__detail--text-view">查看详情</p>
					</div>
					<div v-if="remind.remindType === 'SYSTEM'" class="system-message__detail--text block--float-left">
						<p class="system-message__detail--text-nor">{{remind.remindContent}}</p>
					</div>
	  		</div>	
		</li>
	</ul>
    </div>
</template>
<script>
	import DxHeader from 'pages/common/HeaderPage.vue'
	import {mapState} from 'vuex'
	export default {
		components: {
			DxHeader
		},
		computed: {
			...mapState({
				remindList: state => state.messageList.remindList
			})
		},
		data() {
			return {
				// SYSTEM COURSE_BEGINS COURSE_COMMENT
			}
		},
		methods: {
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
				padding: 0.3rem 0;
			}
			@include m(icon) {
				width: 0.8rem;
				height: 0.8rem;
				border-radius: 50%;
				background: $--message-system-icon;
				background-size: 100% 100%;
				// background-color: #444;
			}
			@include m(text) {
				background-color: rgba(218,218,218,0.3);
				margin-left: 0.1rem;
				width: 5.75rem;
				border-radius: 0.2rem;
				padding: 0.26rem;
				font-size: 0.3rem;
				&-cont {
					font-size: 0.34rem;
					color: #57B8D7;
					margin-bottom: 0.21rem;
				}
				&-view {
					border-top: 1px solid rgba(218,218,218,1);
					padding-top: 0.21rem;
					font-size: 0.3rem;
					color: #484848;
				}
			}
		}
	}	
</style>