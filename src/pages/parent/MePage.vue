<template>
   <div class="index-me">
   	    <div class="index-me__introduction">
   	    	<div class="index-me__introduction--title">
   	    		<span class="index-me__introduction--title-text">
   	    			么么茶
   	    		</span>
   	    		<span 
   	    			class="index-me__introduction--setting"
  					@click="goNext('profile/account')"
   	    		></span>
   	    	</div>
   	    	<div class="index-me__introduction--name">
   	    		<div class="index-me__introduction--name-text">
   	    			<p>学无止境</p>
   	    			<p>2018年加入</p>
   	    		</div>
   	    		<span class="index-me__introduction--icon"></span>
   	    	</div>
   	    	<div class="index-me__introduction--detail">
   	    		<span class="index-me__introduction--detail-text">
   	    			29关注<span>143粉丝</span>
   	    		</span>
   	    		<span 
   	    			class="index-me__introduction--edit block--float-right"
   	    			@click="goPath('/profile/edit')"
   	    		>编辑个人资料</span>
   	    	</div>
   	    </div>
				<dx-cell-item to='profile/sign'>
					<template slot="left">
						<p>上课记录</p>
					</template>
				</dx-cell-item>
				<dx-cell-item to='profile/sign'>
					<template slot="left">
						<p>会员签到</p>
					</template>
					<template slot="right">
						<p>2998积分</p>
					</template>
				</dx-cell-item>
				<dx-cell-item to='profile/invitefriends'>
					<template slot="left">
						<p>邀请好友</p>
					</template>
				</dx-cell-item>		
				<dx-cell-item to='profile/advise'>
					<template slot="left">
						<p>意见反馈</p>
					</template>
				</dx-cell-item>
   	    <dx-footer :selectTab="3"></dx-footer>
   	    <transition 
			name="router"  
			mode='out-in'
		>
			<router-view class="full-screen"/>
		</transition>
    </div>
</template>
<script>
	import DxFooter from '../common/FooterPage.vue'
	import mixin from 'utils/mixin.js'
	export default {
		mixins: [mixin],
		components: {
			DxFooter
		},
		methods: {
			goPath(path) {
				this.$router.push(path)
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
				background-color: red;
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
				background-color: red;
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