
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
	   				<div class="profile-account-sign__introduce--integral-number-total">
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
	   		<dx-calendar>
	   			<div 
	   				slot-scope="slotProps"
	   				class="profile-account-sign__calendar--item"
	   			>
	   				<p 
	   					:class="{
	   						'is-sign': sign[slotProps.date],
	   						'is-today': slotProps.today === slotProps.date
	   					}"
	   				>
	   					{{ slotProps.date }}
	   				</p>
	   				<p class="profile-account-sign--integral-number">
	   					{{ sign[slotProps.date] ? 'X'+number : '' }}
	   				</p>
	   			</div>
	   		</dx-calendar>
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
				number: 15,
				sign: {
					5: 10,
					3: 15
				}
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
			@include m(integral-number-total) {
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
			@include m(item) {
				padding-bottom: 0.22rem;
				width: 0.57rem;
				margin: 0 auto;
				>p:nth-child(1) {
					width: 0.57rem;
					height: 0.57rem;
					text-align: center;
					line-height: 0.57rem;
					color: #7E7E7E;
					border-radius: 50%;
					@include when(sign)	{
						background-color: #8DD0EC;
						color: #FFFFFF;
				   }
				   @include when(today) {
						border: 1px solid #8DD0EC;
				   }
				}
				
			}
  		}
		// 签到积分样式
  		@include m(integral-number) {
  			width: 100%;
  			height: 0.19rem;
			color: #8DD0EC;
			font-size: 0.26rem;
			margin-top: 0.14rem;
  		}
   }  
</style>