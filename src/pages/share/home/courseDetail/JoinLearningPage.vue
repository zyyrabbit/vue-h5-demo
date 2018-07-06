<template>
    <div 
    	v-footer 
    	class="home-course-join"
    >
    	<dx-header></dx-header>
    	<p class="home-course-join--title">加入学习</p>
       	<div class="home-course-join__detail">
       		<div class="home-course-join__detail--icon">
       			<div :style="{backgroundImage: 'url(' + course.courseImage + ')'}"></div>
       		</div>
       		<div class="home-course-join__detail-desc">
       			<div>
       				{{course.evaluationCount > 99 ? '99+' : course.evaluationCount}}
       				<dx-star  
       					type="small"
       					:rating="Math.ceil(course.courseGrade/2)"
       					class="home-course-join__detail-desc--star"
       				></dx-star>
       			</div>
	   			<div>{{course.courseName}}</div>
	   			<div>老师：{{course.user.name}}</div>
	   			<div>{{course.user.persionalSignature}}</div>
       		</div>
       	</div>
				<div>
					<dx-item 
						class="home-course-join__item"
						:to="'/join/' + courseId + '/period'"
					>
						<div slot="left">上课时间</div>
						<div 
							slot="right" 
							class="home-course-join--color-blue text-right" v-if="period.periodDate">
							<p>{{period.periodDate | formatInPeriod}}</p>
							<p>{{period.periodStartTime}} ~ {{period.periodEndTime}}</p>
						</div>
						<div 
							slot="right" 
							class="text-right" v-if="!period.periodDate">
							<p>此课程暂无课时</p>
						</div>
					</dx-item>
					<dx-item class="home-course-join__item">
						<div slot="left">上课地点</div>
						<p 
							slot="right" 
							class="home-course-join--course-place text-right"
						>{{period.periodAddress || '-'}}</p>
					</dx-item>
					<dx-item class="home-course-join__item">
						<div slot="left">课程单价</div>
						<div 
							slot="right"
							class="text-right"
						>￥{{period.periodMoney || '-'}}/小时</div>
					</dx-item>
				</div>
       	<dx-item 
       		class="home-course-join__item"
       		to="/join/edit"
       	>
       		<div slot="left">学员</div>
       		<div 
       			slot="right"
       			class="home-course-join--color-blue home-course-join--student text-right"
       		>
       			<p>{{userName}}</p>
			</div>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">联系电话</div>
					<input 
						slot="right"
						class="home-course-join--telephone"
						placeholder="请输入联系人手机号码" 
					/>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">付款方式</div>
       		<div 
       			slot="right"
       			class="home-course-join--color-blue text-right"
       		>
       			<span @click="goNext('/join/pay')">支付宝（默认）</span>
					</div>
       	</dx-item>
       	<dx-item class="home-course-join__item">
       		<div slot="left">注意：课程开始前，可申请退款</div>
       	</dx-item>
				<price-footer
					@price-footer-click="createOrder()"
					:btn-disabled="!period.periodDate"
					:price="'￥' + (period.periodMoney * courseHour(period.periodStartTime, period.periodEndTime) || 0)" 
					:priceInfo="'￥' + (period.periodMoney || 0) + ' x ' + courseHour(period.periodStartTime, period.periodEndTime)" 
					:btnText="!period.periodDate ? '暂无课时' : '立即支付'"
				>
				</price-footer>
    	<transition
			name="router-slide"  
			mode='out-in'
		>
			<router-view class="full-screen"/>
		</transition>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import dayjs from 'dayjs'
  import {mapState, mapMutations} from 'vuex'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import PriceFooter from 'pages/common/PriceFooter.vue'
	import oapi from 'api/orderApi.js'
	import capi from 'api/courseApi.js'
	import pApi from 'api/periodApi.js'
	export default {
		mixins: [mixin],
		components: {
			DxHeader,
			PriceFooter
		},
		mounted() {
			this.getPeriodByCourse()
			this.getCourseDetl()
			this.SET_SELECT_PERIOD_ID(0)
		},
		computed: {
			...mapState({
				selectPeriodId: state => state.selectPeriodId,
				userName: state => state.userInfo.name
			}),
			selectedPeriod: {
        get: function() {
          return this.selectPeriodId
        },
        set: function(val) {
        }
			},
			period() {
				if (this.periodList && this.periodList.length > 0) {
					return this.periodList[this.selectedPeriod]
				} else {
					return {}
				}
			}
    },
		methods: {
			...mapMutations([
        'SET_SELECT_PERIOD_ID'
			]),
      courseHour(startTime, endTime) {
        const st = dayjs('2001-01-01 ' + startTime)
        const et = dayjs('2001-01-01 ' + endTime)
        return et.diff(st, 'hours') || 0
      },
			getCourseDetl() {
				capi.getCourseDetl({id: this.courseId}).then(r => {
					this.course = r.data
				})
			},
			getPeriodByCourse() {
				pApi.getPeriodByCourse({courseId: this.courseId}).then(r => {
					this.periodList = r.data.period
				})
			},
			createOrder() {
        console.info(this.period)
        let param = {
					// 订单类型
					orderType: '3',
					// 支付方式
					modePayment: '2',
          arbitrarilyId: this.period.id
        }
        oapi.createPlaceOrder(param).then(r => {
        })
			}
		},
		data() {
			return {
				courseId: this.$route.params.id,
				periodList: [],
				// FIXME
				// selectedPeriod: 0,
				course: {
					user: {}
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-join) {
		font-size: 0.3rem;
		padding: 0.31rem 0.4rem 0;
		@include m(color-blue) {
			color: #57B8D7;
		}
		@include m(title) {
			font-size: 0.6rem;
			color: #484848;
			margin-top: 0.61rem;
		}
		// 具体介绍
		@include e(detail) {
			display: flex;
			align-items: center;
			margin: {
				top: 0.49rem;
				bottom: 0.65rem;
			}
			@include m(icon) {
				flex-grow: 1;
				>div{
					border-radius: 0.03rem;
					// background-color: #ccc;
					background-size: 100% 100%;
					width: 2.33rem;
					height: 1.9rem;
				}
			}
		}
		@include e(detail-desc) {
			text-align: right;
			>div {
				margin-bottom: 0.1rem;
			}
			@include m(star) {
				display: inline-block;
			}
			>div:nth-child(2) {
				font-size: 0.44rem;
			}
		}
		// 每一行的样式
		@include e(item) {
			padding: 0.52rem 0;
			border-top: 0.02rem solid #EBEBEB;
			font-size: 0.36rem;
			>div:nth-child(2) {
				text-align: right;
			}
		}

		// 上课地点样式
		@include m(course-place) {
			width: 3.8rem;
		}
		// 学员
		@include m(student) {
			>p:not(:last-child) {
				margin-bottom: 0.38rem;
			}
		}

		// 输入联系电话
		@include m(telephone) {
			border: none;
			display: inline-block;
			width: 3.56rem;
			color: #D3D3D3;
			font-size: 0.36rem;
			// 设置暂未符样式
			@include placeholder {
				color: #D3D3D3;
			}
		}
	}

</style>