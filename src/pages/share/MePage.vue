<template>
   <div class="index-me" v-footer>
   	    <div class="index-me__introduction">
   	    	<div class="index-me__introduction--title">
   	    		<span class="index-me__introduction--title-text">
   	    			{{userInfo.name}}
   	    		</span>
   	    		<span 
   	    			class="index-me__introduction--setting"
  					@click="goNext('/account')"
   	    		></span>
   	    	</div>
   	    	<div class="index-me__introduction--name">
   	    		<div class="index-me__introduction--name-text">
   	    			<p>{{userInfo.persionalSignature || '暂无签名'}}</p>
   	    			<p>{{formatYear(userInfo.createDate)}}年加入</p>
   	    		</div>
   	    		<span class="index-me__introduction--icon"
							:style="{backgroundImage: 'url(' + userInfo.persionalImage + ')'}"></span>
   	    	</div>
   	    	<div class="index-me__introduction--detail">
   	    		<span class="index-me__introduction--detail-text">
   	    			0关注<span>0粉丝</span>
   	    		</span>
   	    		<span 
   	    			class="index-me__introduction--edit block--float-right"
   	    			@click="goNext('/profile/edit')"
   	    		>编辑个人资料</span>
   	    	</div>
   	    </div>
   	    <dx-item-list :items="items"></dx-item-list>
   	    <dx-footer :selectTab="3"></dx-footer>
   	    <transition 
			name="router-slide"  
			mode='out-in'
		>
			<router-view class="full-screen"/>
		</transition>
    </div>
</template>
<script>
  import dayjs from 'dayjs'
	import DxFooter from 'pages/common/FooterPage.vue'
	import mixin from 'utils/mixin.js'
	import { profile } from 'pages/share/profile/model.js'
	import { mapGetters } from 'vuex'
	export default {
		mixins: [mixin],
		components: {
			DxFooter
		},
		data() {
			return {
				items: []
			}
		},
		methods: {
			formatYear(val) {
				if (dayjs(val).isValid()) {
					return dayjs(val).format('YYYY')
				}
			}
		},
		computed: {
			...mapGetters([
				'userInfo'
			])
		},
		created() {
			this.items = this.userInfo.role === '1' ? profile['parent'] : profile['teacher']
		},
		mounted() {
			// FIXME
			if (this.userInfo.role === '0') {
				this.items[0].rightText = '共' + (this.userInfo.courseNumber || 0) + '门'
				this.items[3].rightText = (this.userInfo.grossScore || 0) + '积分'
			} else if (this.userInfo.role === '1') {
				this.items[1].rightText = (this.userInfo.grossScore || 0) + '积分'
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(index-me) {
		padding-top: 0.33rem;
		color: #484848;
		@include e(introduction) {
			// border-bottom: 2px solid #EBEBEB;
			/* 介绍公共样式 */
			@include m(title name detail) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				wrap: nowrap;
			}
			/* 标题文字 */
			@include m(title-text) {
				font-size: 0.48rem;
				height: 0.88rem;
			}
			@include m(setting) {
				background: $--me-btn-setting;
				background-size: 100% 100%;
				display: inline-block;
				width: 0.88rem;
				height: 0.88rem;
			}
			@include m(name) {
				height: 1.13rem;
			}
			@include m(name-text) {
				>p:nth-child(1) {
					font-size: 0.36rem;
				}
				>p:nth-child(2) {
					font-size: 0.24rem;
				}
			}
			@include m(icon) {
				// background: url('../../assets/images/index/home/teacher1.png');
				background-size: 100% 100%;
				border-radius: 50%;
				display: inline-block;
				width: 0.88rem;
				height: 0.88rem;
			}
			/* 详细介绍 */
			@include m(detail) {
				line-height: 1.58rem;
			}
			@include m(detail-text) {
				font-size: 0.24rem;
				>span {
					margin-left: 0.36rem;
				}
			}
			@include m(edit) {
				font-size: 0.3rem;
				color: #FF9CC8;
			}
		}
		@include m(feedback) {
			border: none;
		}
	}	
</style>