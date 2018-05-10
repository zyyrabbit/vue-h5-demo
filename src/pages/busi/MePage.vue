<template>
   <div class="index-me">
   	    <div class="index-me__introduction">
   	    	<div class="index-me__introduction--title">
   	    		<span class="index-me__introduction--title-text">
   	    			么么茶
   	    		</span>
   	    		<span class="index-me__introduction--setting"></span>
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
   	    		<span class="index-me__introduction--edit block--float-right">编辑个人资料</span>
   	    	</div>
   	    </div>
   	    <div class="index-me--record">
   	    	上课记录
   	    </div>
   	    <div class="index-me--sign">
   	    	会员签到
   	    	<span  class="block--float-right">2998积分</span>
   	    </div>
   	    <div class="index-me--friend">
   	    	邀请好友
   	    </div>
   	    <div class="index-me--feedback">
   	    	意见反馈
   	    </div>
    </div>
</template>
<script>
</script>
<style  lang="scss">
	@include b(index-me) {
		margin-top: 0.33rem;
		color: #484848;
		@include e(introduction) {
			border-bottom: 2px solid #EBEBEB;
			/* 介绍个公共样式 */
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
		@include m(record sign friend feedback) {
			font-size: 0.36rem;
			line-height: 1.44rem;
			border-bottom: 2px solid #EBEBEB;
		}
		@include m(feedback) {
			border: none;
		}
	}	
</style>