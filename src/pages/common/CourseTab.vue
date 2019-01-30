<template>
   <div class="course-tab">
	    <ul class="course-tab-list">
	    	<li class="course-tab-list__item" v-for="course in courses">
	    		<div class="course-tab-list__item-detail">
	    			<div class="course-tab-list__item-detail--head">
	    				<span
                :class="{'is-no-valid': state === 2}" 
                class="course-tab-list__item-detail--date"
                >
                <span></span>
                <span>{{course.periodDate | formatInPeriod}} {{course.week}}</span>
              </span>
	    				<span class="course-tab-list__item-detail--sign-up-number" 
                :class="{'sign-up-number-teacher': isTeacher}"
                @click="isTeacher && goNext('/teacher/course/students/' + course.periodId + '/' + state)">
                {{course.count || 0}}人报名
              </span>
	    			</div>
	    			<div class="course-tab-list__item-detail--content">
	    				<p class="course-tab-list__item-detail--title">{{course.courseName}}</p>
	    				<p class="course-tab-list__item-detail--classroom">{{course.fieldName}}</p>
	    				<p class="course-tab-list__item-detail--open-time">开放时间: {{course.periodDate | formatDate}} {{course.beginTime}}-{{course.overTime}}</p>
	    				<p class="course-tab-list__item-detail--place">详细地址: {{course.fieldAddress}}</p>
	    			</div>
	    			<div class="course-tab-list__item-detail--time">
	    				<div class="course-tab-list__item-detail--time-begin">
	    					<div>{{course.beginTime}}</div>开始
	    				</div>
	    				<div class="course-tab-list__item-detail--time-during">{{dayjs(course.beginTime, course.overTime)}}小时</div>
	    				<div class="course-tab-list__item-detail--time-end">
	    					<div>{{course.overTime}}</div>结束
	    				</div>
	    			</div>
	    		</div>
          <div class="course-tab-list__item-operate">   
            <!-- 家长 已上课 -->
            <div class="button-list" v-if="state === 2 && !isTeacher" >
              <dx-button type='primary' @dx-button-click="goNext('/course/homework/' + course.periodId)">课后复习</dx-button>
              <dx-button type='primary' @dx-button-click="goNext('/course/judge/' + course.periodId)">评价课程</dx-button>
              <dx-button :disabled="course.userState === '1'" type='primary'>{{course.userState === '0' ? '确认上课' : '已确认上课'}}</dx-button>
            </div>
            <!-- 家长 正在上课 -->
            <div class="button-list"  v-if="state === 1 && !isTeacher">
              <dx-button type='pinking'>视频直播</dx-button>
            </div>
            <!-- 家长 待上课 -->
            <div class="button-list" v-if="state === 0 && !isTeacher">
              <dx-button type='gray' @dx-button-click="plsWait" :disabled="course.userState === '3'" >{{course.userState === '0' ? '取消课程' : '正申请取消'}}</dx-button>
              <dx-button type='pinking' @dx-button-click="goNext('/course/chat/' + course.userId)">联系老师</dx-button>
            </div>
            <!-- 老师 待开课 -->
            <div class="button-list" v-if="state === 0 && course.userState !== '2' && isTeacher">
              <dx-button type='gray' @dx-button-click="plsWait">取消课程</dx-button>
              <dx-button type='primary' @dx-button-click="goNext('/teacher/course/changePla/' + course.periodId)">更换场地</dx-button>
              <dx-button type='primary' @dx-button-click="goNext('/teacher/course/changePla/' + course.periodId)">修改价格</dx-button>
            </div>
            <div class="course-tab-list__item-operate-wating" v-if="state === 0 && course.userState === '2' && !isTeacher">
              <span>退款成功</span>
              <dx-button type="primary"  @dx-button-click="goNext('course/bill')">
                查看退款
              </dx-button>
            </div>      
            <!-- 老师 课程结束 -->
            <div class="button-list" v-if="state === 2 && isTeacher">
              <dx-button type='primary' @dx-button-click="goNext('/teacher/course/homework/' + course.periodId)">布置作业</dx-button>
              <dx-button type='primary' @dx-button-click="goNext('/teacher/course/viewhomework/' + course.periodId)">作业情况</dx-button>
              <dx-button type='primary' @dx-button-click="goNext('/teacher/course/students/' + course.periodId + '/' + state)">评价学员</dx-button>
              <!-- <dx-button type='primary' @dx-button-click="plsWait">查看评价</dx-button> -->
            </div>
            <!-- <button-list :btns="tabs[selectTabIndex].btns"></button-list> -->
          </div>
	    	</li>
	    </ul>
   </div>
</template>
<script>
	import {mapState} from 'vuex'
  import dayjs from 'dayjs'
  import mixin from 'utils/mixin.js'
  import ButtonList from 'pages/common/ButtonList.vue'
  export default {
    components: {
      ButtonList
    },
		computed: {
			...mapState({
				role: state => state.userInfo.role
      }),
      isTeacher() {
        return this.role === '0'
      }
    },
    mounted() {
      console.info(this.isTeacher)
    },
    mixins: [mixin],
    props: {
      state: Number,
      courses: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      dayjs(startTime, endTime) {
        const st = dayjs('2001-01-01 ' + startTime)
        const et = dayjs('2001-01-01 ' + endTime)
        return et.diff(st, 'hours', true)
      },
      selectTab(index) {
        this.selectTabIndex = index
      }
    }
  }
</script>
<style scoped lang="scss">
	@include b(course-tab) {
		@include e(status) {
			margin: {
				top: 0.51rem;
				bottom: 0.56rem;
			}
			font-size: 0.28rem;
			>li {
				float: left;
				margin-right: 0.66rem;
            >div {
               width: 100%;
               height: 0.07rem;
               margin-top: 0.07rem;
            }
            @include when(active) {
               color: #57B8D7; 
               > div {
                  background: rgba(87,184,215,1);
                  border-radius: 0.04rem;
               }
            }
			}
		}
		@include b(course-tab-list) {
      width: 100%;
      @include e(item){
        padding-top: 0.34rem;
        margin-top: 0.56rem;
        border: 1px solid #D7D7D7;
        box-shadow: 0  0.08rem 0.1rem rgba(91,91,91,0.1);        
      }
      @include e(item-detail item-operate) {
        padding: 0 0.31rem;
      }
			@include e(item-detail) {
				font-size: 0.24rem;
				color: #484848;
            border-bottom: 1px solid #E6E6E6;
            @include m(head) {
              @include  space-between;
              .sign-up-number-teacher{
                position: relative;
              }
              .sign-up-number-teacher::after {
                content: " ";
                display: inline-block;
                height: 0.1rem;
                width: 0.1rem;
                border-width: 0.04rem 0.04rem 0 0;
                border-color: #C8C8CD;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                position: absolute;
                top: 50%;
                margin-top: -0.06rem;
                right: -0.1rem;
              }
            }
            @include m(date) {
               display: flex;
               align-items: center;
               width: 2.32rem;
               height: 0.54rem;
               background: #FF9CC8;
               border-radius: 0  0.27rem  0.27rem 0;
               margin-left: -0.31rem;
               >span:nth-child(1) {
                  display: inline-block;
                  width: 0.1rem;
                  height: 0.1rem;
                  border-radius: 50%;
                  background: #fff;
                  margin: 0 0.11rem;
               }
               @include when(no-valid) {
                  background: #C3C3C3;
               }
            }
				@include m(title classroom) {
					font-size: 0.36rem;
				}
            @include m(open-time) {
               margin-top: 0.23rem;
            }
            @include m(place) {
               margin-top: 0.18rem;
            }
            @include m(title) {
                margin: 0.27rem 0;
            }
            @include m(time) {
               @include  space-between;
                margin: {
                   top: 0.53rem;
                   bottom: 0.43rem;
                }
               >div {
                  text-align: center;
               }
            }
				@include m(time-during) {
                    position: relative;
                    &:before{
                        content: "";
                        position: absolute;
                        height: 0.02rem;
                        width: 0.34rem;
                        background: #7E7E7E;
                        left: -0.4rem;
                        // top: 42%;
                        top: 0.16rem;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        height: 0.02rem;
                        width: 0.34rem;
                        background: #7E7E7E;
                        // top: 42%;
                        top: 0.16rem;
                        right: -0.4rem;
                    }
				}            
				@include m(time-begin time-end) {
					>div {
						font-size: 0.48rem;
					}
				}
			}
         @include e(item-operate-doing) {
            >button {
               width: 6rem;
            }
         }
         @include e(item-operate-wating) {
          display: flex;
          align-items: center;
          padding: 0.44rem 0 0.5rem;
          span{
            font-size: 0.3rem;
            color: #484848;
            flex-grow: 1;
          }
          >button {
            height: 0.58rem;
            font-size: 0.3rem;              
            width: 2.7rem;
            border-radius: 0.29rem;
          }
        }
		}
	}


</style>