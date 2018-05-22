
<template>
   <div class="profile-account-sign">
	    <dx-header>
	   		<span 
	   			slot="next"
	   			class="profile-account-sign--integral-mall"
	   		>积分商城</span>
	    </dx-header>
	    <div class="profile-account-sign__introduce">
	   		<dx-item>
	   			<div 
	   				slot="left"
	   				class="profile-account-sign__introduce--text"
	   			>
	   				么么茶
	   				<div class="profile-account-sign__introduce--integral-number">
	   					<span>总积分:760</span>
	   				</div>
	   			</div>
	   			<div 
	   				slot="right"
	   				class="profile-account-sign__introduce--pic"
	   			></div>
	   		</dx-item>
	    </div>
	    <div class="profile-account-sign__calendar">
	   		<dx-calendar></dx-calendar>
	    </div>
	    <div class="profile-account-sign--submit-btn">
	   		<dx-button size="max" type="primary">签到 今日+25</dx-button>
	   	</div>
   </div>
</template>
<script>
    import DxHeader from '../../common/HeaderPage.vue'
    export default {
        components: {
           DxHeader
        },
        data() {
			return {
			}
		},
		methods: {
		}
   }
</script>
<style scoped lang="scss">
   	@include b(profile-account-sign) {
      	padding: 0.33rem 0.37rem 0;
      	color: #484848;
      	font-size: 0.36rem;
      	@include m(integral-mall) {
         	color: #57B8D7;
      	}
      	// 用户资料介绍
      	@include e(introduce) {
			margin: {
				top: 0.57rem;
			}
			border-bottom: solid  0.02rem rgba(235,235,235,1);
			@include m(text) {
				color: #484848;
				font-size: 0.48rem;
				line-height: 0.56rem;
				padding-bottom: 0.66rem;
			}
			// 积分数量
			@include m(integral-number) {
				color: #FF9CC8;
				font-size: 0.36rem;
			}
			// 用户头像
			@include m(pic) {
				width: 1.13rem;
				height: 1.13rem;
				border-radius: 50%;
				background-color: red;
			}
  		}

  		@include e(calendar) {
			margin: {
				top: 0.5rem;
				bottom: 0.5rem;
			}
  		}
   }  
</style>