<template>
   	<div class="profile-account-discount" v-footer>
      	<dx-header>
      		<span
      			slot="title"
      			class=""
      		>一起趣学8折折扣券</span>
      	</dx-header>
      	<div class="profile-account-discount__title">
			<div class="profile-account-discount__title-discount">
				<div class="profile-account-discount__title-discount--number">
					<p>8</p>
					<p>折</p>
				</div>
				<p>折扣券</p>
				<p>购买课程时自动使用</p>
			</div>
      	</div>
      	<div class="profile-account-discount__detail">
      		<div class="profile-account-discount__detail--title">
	   			<p>一起趣学8折折扣券</p>
	   			<p>760</p>
	   		</div>
	   		<div class="profile-account-discount__detail--desc">
	   			<p>商品介绍</p>
	   			<p>
	   				此商品为虚拟物品,在用户加入学习时自动抵扣,有效期为24个月,仅可使用一次。
	   			</p>
	   		</div>
	   		<div class="profile-account-discount__detail--get-method">
	   			<p>收获方式</p>
	   			<p>到店领取</p>
	   		</div>
      	</div>
      	<div class="profile-account-discount--submit">
      		<dx-button 
	   			size="max" 
	   			type="primary"
	   			class="profile-account-discount--submit-btn"
	   		>立即签到</dx-button>
      	</div>
   	</div>
</template>
<script>
   	import DxHeader from 'pages/common/HeaderPage.vue'
   	export default {
		components: {
			DxHeader
		},
		methods: {
			goPath(path) {
				this.$router.push('/profile/pwdMod')
			}
		}
   	}
</script>
<style scoped lang="scss">
   	@include b(profile-account-discount) {
      	padding: 0.33rem 0.4rem 0.93rem;
      	color: #484848;
      	font-size: 0.36rem;
      	margin-bottom: 1.62rem;
      	overflow: scroll;
      	@include e(title) {
			height: 6rem;
			margin: 0.25rem -0.4rem 0;
			background-color: #F6F6F6;
			color: #FF3D3D;	
			@include center;
  		}
  		@include e(title-discount) {
				padding: 0.5rem 0.7rem;
				background: #FFF8F8;
				text-align: center;
				border: 0.01rem solid #BFBFBF;
				border-radius: 0.1rem;
			@include m(number) {
				@include center;
				align-items: baseline;
				>p:nth-child(1) {
					line-height: 0.8;
					font-size: 2.56rem;
				}
				>p:nth-child(2) {
					line-height: 1.13rem;
					font-size: 1.13rem;
				}
			}
			>p:nth-child(2) {
				margin-top: 0.5rem;
				font-size: 0.49rem;
			}
			>p:nth-child(3) {
				margin-top: 0.37rem;
				font-size: 0.34rem;
				color: #000000;
			}
		}

		@include e(detail) {
			margin-top: 0.56rem;
			@include m(title) {
				>p:nth-child(1) {
					color: #333333;
					font-size: 0.48rem;
				}
				>p:nth-child(2) {
					margin-top: 0.31rem;
					font-size: 0.52rem;
					color: #FF9CC8;
				}
			}

			@include m(desc get-method) {
				margin-top: 0.56rem;
				color: #484848;
				>p:nth-child(1) {
					font-size: 0.36rem;
				}
				>p:nth-child(2) {
					font-size: 0.34rem;
					margin-top: 0.25rem;
				}
			}
		}

		// 提交底部
  		@include m(submit) {
  			position: fixed;
  			bottom: 0;
  			text-align: center;
			width: 100%;
			height: 1.62rem;
			margin-left: -0.4rem;
			margin-right: -0.4rem;
			background-color: #fff;
			box-shadow: 0 -0.1rem 0.09rem rgba(0, 0, 0, 0.06);
			@include utils-vertical-center;
  		}
  		// 提交按钮
  		@include m(submit-btn) {
			display: inline-block;
			vertical-align: middle;
  		}
   	}  
</style>