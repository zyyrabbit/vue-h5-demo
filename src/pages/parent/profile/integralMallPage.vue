
<template>
   <div class="profile-account-mall">
   	   <div class="profile-account-mall__head">
		   <dx-header>
		   		<span 
		   			slot="title"
		   			class="profile-account-mall__head--title"
		   		>积分商城</span>
		   		<span 
		   			slot="next"
		   			class="profile-account-mall__head--record"
		   			@click="goPath('/profile/exhRecord')"
		   		>兑换记录</span>
		   </dx-header>
		   <div class="profile-account-mall__head--integral-number">
		   		<span>star</span>760
		   </div>
	   </div>
	   <dx-ul class="profile-account-mall__group-prize">
	   		<li class="profile-account-mall__item-prize">
	   			<div 
	   				class="profile-account-mall__item-prize--title"
	   				@click="goPath('/profile/discount')"
	   			>
	   				<div class="profile-account-mall__item-discount">
		   				<p class="profile-account-mall__item-discount--number">
		   					<span>8</span>折
		   				</p>
		   				<p>折扣券</p>
		   				<p>购买课程时自动使用</p>
	   				</div>
	   			</div>
	   			<div class="profile-account-mall__item-prize--desc">
	   				<p>一起趣学8折折扣券</p>
	   				<p><span>star</span>760</p>
	   			</div>
	   		</li>
	   		<li class="profile-account-mall__item-prize">
	   			<div 
	   				class="profile-account-mall__item-prize--title"
	   				@click="goPath('/profile/discount')"
	   			>
	   				<div class="profile-account-mall__item-prize--pic">
		   				
	   				</div>
	   			</div>
	   			<div class="profile-account-mall__item-prize--desc">
	   				<p>儿童创意绘画入门教材3至6岁 上下两册</p>
	   				<p><span>star</span>760</p>
	   			</div>
	   		</li>
	   		<li class="profile-account-mall__item-prize">
	   			<div 
	   				class="profile-account-mall__item-prize--title"
	   				@click="goPath('/profile/discount')"
	   			>
	   				<div class="profile-account-mall__item-discount">
		   				<p class="profile-account-mall__item-discount--number">
		   					<span>8</span>折
		   				</p>
		   				<p>折扣券</p>
		   				<p>购买课程时自动使用</p>
	   				</div>
	   			</div>
	   			<div class="profile-account-mall__item-prize--desc">
	   				<p>一起趣学8折折扣券</p>
	   				<p><span>star</span>760</p>
	   			</div>
	   		</li>
	   		<li class="profile-account-mall__item-prize">
	   			<div 
	   				class="profile-account-mall__item-prize--title"
	   				@click="goPath('/profile/discount')"
	   			>
	   				<div class="profile-account-mall__item-prize--pic">
		   				
	   				</div>
	   			</div>
	   			<div class="profile-account-mall__item-prize--desc">
	   				<p>儿童创意绘画入门教材3至6岁 上下两册</p>
	   				<p><span>star</span>760</p>
	   			</div>
	   		</li>
	   </dx-ul>
   </div>
</template>
<script>
    import DxHeader from '../../common/HeaderPage.vue'
    export default {
        components: {
           DxHeader
        },
		methods: {
			goPath(path) {
				this.$router.push(path)
			}
		}
   }
</script>
<style scoped lang="scss">
  	@include b(profile-account-mall) {
		@include e(head) {
			width: 100%;
			height: 2.83rem;
			color: #FFFFFF;
			padding: {
				top: 0.36rem;
				left: 0.4rem;
				right: 0.4rem;
			}
			background-color: #8DD0EC;
			font-size: 0.36rem;
			@include m(integral-number) {
				font-size: 1rem;
				height: 2.13rem;
				@include center;
			}
		}
		@include e(group-prize) {
			padding: 0 0.76rem 0;
			align-items: flex-start;
		}
		@include e(item-prize) {
			width: 2.36rem;
			font-size: 0.26rem;
			margin-top: 0.98rem;
			// 折扣
			@include m(title) {
				width: 100%;
				height: 2.57rem;
				background-color: #FFF8F8;
				border-radius: 0.1rem;
				margin-bottom: 0.48rem;
				color: #FF3D3D;
				@include center;
			}
			@include m(number) {
				font-size: 0.22rem;
				color: #FF9CC8;
			}

			@include m(desc) {
				text-align: center;
			}
		}

		@include e(item-discount) {
			text-align: center;
			@include m(number) {
				line-height: 1.02rem;
				vertical-align: middle;
				font-size: 0.6rem;
				>span {
					font-size: 1.36rem;
				}
			}
			>p:nth-child(2) {
				font-size: 0.26rem;
			}
			>p:nth-child(3) {
				font-size: 0.18rem;
			}
		}
   	}  
</style>