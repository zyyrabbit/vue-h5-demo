<template>
    <div class="home-course-period" v-footer>
    	<dx-header is-close></dx-header>
    	<ul class="home-course-period__content">
    		<li 
    			v-for="(period, index) in periodList" 
    			:key="period.id"
    			:class="{'is-disabled': disabled === index}"
    			class="home-course-period__content-item"
    		>
	    		<div class="home-course-period__content-item--desc">
	    			<p>
	    				<span 
	    					:class="{'is-disabled': disabled === index}"
	    					class="home-course-period__content-item--price"
	    				>¥{{period.periodMoney}}</span>
							<span 
								:class="{'is-disabled': disabled === index}" 
								class="home-course-period__content-item--price-text">/学员</span>
	    			</p>
	    			<p>{{period.periodDate | formatInPeriod}} {{period.periodStartTime}}~{{period.periodEndTime}}</p>
	    			<p v-if="period.field">{{period.field.fieldName}}</p>
	    			<p>{{period.periodAddress}}</p>
	    		</div>
					<dx-radio 
						v-model="select"
						:label="index"
						:disabled="disabled === index"
						no-label
						class="home-course-period__content-item--radio"
					>
						<span 
							slot="radio-icon" 
							class="home-course-period__content-item--radio-icon"
						></span>
					</dx-radio>
    		</li>
    	</ul>
    	<button-footer 
    		@button-footer-click="handleClick()"
    		btnText="下一步"
    	></button-footer>
   	</div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	import pApi from 'api/periodApi.js'
	export default {
		mixins: [mixin],
		components: {
			DxHeader,
			ButtonFooter
		},
		mounted() {
			this.getPeriodByCourse()
		},
		computed: {
			...mapState({
        selectPeriodId: state => state.selectPeriodId
			}),
			select: {
        get: function() {
          return this.selectPeriodId
        },
        set: function(val) {
          this.SET_SELECT_PERIOD_ID(val)
        }
			}
    },
		methods: {
			...mapMutations([
        'SET_SELECT_PERIOD_ID'
			]),
			getPeriodByCourse() {
				pApi.getPeriodByCourse({courseId: this.courseId}).then(r => {
					this.periodList = r.data.period
				})
			},
			handleClick() {
				this.$router.go(-1)
			}
		},
		data() {
			return {
				courseId: this.$route.params.id,
				periodList: [],
				// select: 0,
				disabled: -1
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-period) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include e(content) {
			margin-top: 0.11rem;
		}
		@include e(content-item) {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.56rem 0;
			font-size: 0.26rem;
			color: #484848;
			@include when(disabled) {
				color: #7E7E7E;
				opacity: 0.5;
			}
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc) {
				>p {
					margin-bottom: 0.16rem;
					line-height: 1;
				}
				>p:nth-child(2) {
					font-size: 0.36rem;
				}
			}
			@include m(price) {
				color: #FF9CC8;
				font-size: 0.48rem;
				@include when(disabled) {
					color: #7E7E7E;
				}
			}
			@include m(price-text) {
				color: #FF9CC8;
				@include when(disabled) {
					color: #7E7E7E;
				}				
			}
			@include m(radio-icon) {
				display: inline-block;
				background: $--btn-select-nor-background;
				background-size: 100% 100%;
				width: 0.88rem;
				height: 0.88rem;
			}
			/* 角色选中的样式 */
			.is-check {
				.home-course-period__content-item--radio-icon {
					background: $--btn-select-background;
					background-size: 100% 100%;
				}
			}
		}
	}

</style>