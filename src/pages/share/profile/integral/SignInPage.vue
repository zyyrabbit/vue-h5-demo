
<template>
   <div class="profile-account-sign">
	    <dx-header>
	   		<span 
	   			slot="next"
	   			class="profile-account-sign--integral-mall"
	   			@click="goNext('/integralMall')"
	   		>积分商城</span>
	    </dx-header>
	    <div class="profile-account-sign__introduce">
	   		<dx-item>
	   			<div 
	   				slot="left"
	   				class="profile-account-sign__introduce--text"
	   			>
	   				{{userInfo.name}}
	   				<div class="profile-account-sign__introduce--integral-number-total">
	   					<span>总积分: 
								 <div class="profile-account-sign__introduce--score-icon"></div>
								 <span>{{score}}</span>
							</span>
	   				</div>
	   			</div>
	   			<div 
	   				slot="right"
	   				class="profile-account-sign__introduce--pic"
						:style="{backgroundImage: 'url(' + userInfo.persionalImage + ')'}"></div>
	   		</dx-item>
	    </div>
	    <div class="profile-account-sign__calendar">
	   		<dx-calendar :currentMonth="true" @month-change="monthChange()">
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
	   					{{ sign[slotProps.date] ? 'x'+ sign[slotProps.date] : '' }}
	   				</p>
	   			</div>
	   		</dx-calendar>
	    </div>
	    <div class="profile-account-sign--submit">
	   		<dx-button 
				 	:disabled="sign[today] !== null && sign[today] !== undefined"
	   			size="max" 
	   			type="primary"
	   			class="profile-account-sign--submit-btn"
					@dx-button-click="signToday()"
	   		>签到 今日+{{number}}</dx-button>
	   	</div>
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
	import {mapState} from 'vuex'
	import uapi from 'api/userApi.js'
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
	mixins: [mixin],
		components: {
				DxHeader
		},
		computed: {
			...mapState({
				userInfo: state => state.userInfo
			})
		},
		mounted() {
			this.getSignHistory()
		},
		methods: {
			getSignHistory() {
				uapi.getSignHistory().then(r => {
					if (r.data) {
						this.score = r.data.grossScore
						this.number = 10 * r.data.signCount + 15 > 25 ? 25 : 10 * r.data.signCount + 15
						let h = r.data.historyList
						this.sign = {}
						h.forEach(i => {
							this.sign[dayjs(i.signDate).date()] = i.score
						})
					}
				})
			},
			signToday() {
				uapi.submitSign().then(r => {
					alert('签到成功')
					this.getSignHistory()
				})
			},
			monthChange(val) {
				// FIXME
				console.info(val)
			}
		},
		data() {
			return {
				// 基础分数
				number: 10,
				sign: {},
				score: 0,
				today: dayjs().date()
			}
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
					padding-bottom: 0.66rem;
					margin: {
						top: 0.3rem;
					}
					border-bottom: solid  0.02rem rgba(235,235,235,1);
					@include m(text) {
						color: #484848;
						font-size: 0.48rem;
						line-height: 0.56rem;
						// padding-bottom: 0.66rem;
					}
					// 积分数量
					@include m(integral-number-total) {
						font-size: 0.36rem;
						span{
							display: flex;
							align-items: center;
							span{
								color: #FF9CC8;
							}
						}
					}
					@include m(score-icon) {
						margin-left: 0.1rem;
						margin-right: 0.05rem;
						width: 0.34rem;
						height: 0.3rem;
						background: $--me-score-icon;
            			background-size: 100% 100%;
					}
					// 用户头像
					@include m(pic) {
						width: 1.13rem;
						height: 1.13rem;
						border-radius: 50%;
						background-size: 100% 100%;
					}
				}
  		@include e(calendar) {
				margin: {
					top: 0.3rem;
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
							color: #FFFFFF!important;
						}
						@include when(today) {
							border: 0.03rem solid #8DD0EC;
							color: #8DD0EC;
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
			margin-top: 0.08rem;
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