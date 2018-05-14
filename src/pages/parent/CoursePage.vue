<template>
   <div class="index-course">
	    <div class="index-course--title">
	    	我的课程
	    </div>
	    <ul class="index-course__status clearfix">
         <li 
            v-for="(tab, index) in tabs"
            :class="{'is-active': selectTabIndex === index}"
            :key="index"
            @click="selectTab(index)"
         >
            {{tab}}<div></div>
         </li>
	    </ul>
	    <ul class="index-course-list">
	    	<li class="index-course-list__item">
	    		<div class="index-course-list__item-detail">
	    			<div class="index-course-list__item-detail--head">
	    				<span
                     :class="{'is-valid': isValid}" 
                     class="index-course-list__item-detail--date"
                  >
                     <span></span>
                     <span>4月26号 周四</span>
                  </span>
	    				<span class="index-course-list__item-detail--sign-up-number">2人报名</span>
	    			</div>
	    			<div class="index-course-list__item-detail--content">
	    				<p class="index-course-list__item-detail--title">带孩子走进故事王国</p>
	    				<p class="index-course-list__item-detail--classroom">西溪湿地商务园区1号教室</p>
	    				<p class="index-course-list__item-detail--open-time">开放时间: 2018年4月26日 07:00~20:00</p>
	    				<p class="index-course-list__item-detail--place">详细地址: 西湖区文二西路551号好西城广场4楼</p>
	    			</div>
	    			<div class="index-course-list__item-detail--time">
	    				<div class="index-course-list__item-detail--time-begin">
	    					<div>07:00</div>开始
	    				</div>
	    				<div class="index-course-list__item-detail--time-during">--2小时--</div>
	    				<div class="index-course-list__item-detail--time-end">
	    					<div>09:00</div>结束
	    				</div>
	    			</div>
	    		</div>
	    		<div 
               v-show="selectTabIndex === 2" 
               class="index-course-list__item-operate"
            >
	    			<dx-button  type="primary">再次学习</dx-button>
	    			<dx-button  
                  type="primary"
                  @dx-button-click="goNext('/course/judge')"
               >
                  评价课程
               </dx-button>
	    			<dx-button  type="primary">已确认上课</dx-button>
	    		</div>
            <div 
               v-show="selectTabIndex === 1" 
               class="index-course-list__item-operate index-course-list__item-operate-doing"
            >
               <dx-button  type="pinking">视频直播</dx-button>
            </div>
            <div 
               v-show="selectTabIndex === 0 && isValid" 
               class="index-course-list__item-operate index-course-list__item-operate-wating"
            >
               <dx-button  type="gray">取消课程</dx-button>
               <dx-button  type="primary">联系老师</dx-button>
            </div>
            <div  
               v-show="selectTabIndex === 0 && !isValid"
               class="index-course-list__item-operate index-course-list__item-operate-wating">
               <span>退款成功</span>
               <dx-button  
                  type="primary" 
                  @dx-button-click="goNext('course/bill')"
               >
                  查看退款
               </dx-button>
            </div>
	    	</li>
	    </ul>
       <dx-footer :selectTab="1"></dx-footer>
   </div>
</template>
<script>
   import DxFooter from '../common/FooterPage.vue'
   export default {
      components: {
         DxFooter
      },
      data() {
         return {
            tabs: ['待上课', '正在上课', '已上课'],
            selectTabIndex: 2,
            isValid: false
         }
      },
      methods: {
         selectTab(index) {
            this.selectTabIndex = index
            if (index === 1) {
               this.isValid = true
            } else {
               this.isValid = false
            }
         },
         goNext(path = '') {
            this.$router.push({ path })
         }
      }
   }
</script>
<style  lang="scss">
	@include b(index-course) {
      padding-top: 0.56rem;
		@include m(title) {
			font-size: 0.48rem;
			color: #484848;
		}
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
		@include b(index-course-list) {
			width: 100%;
			padding-top: 0.34rem;
         border: 1px solid #D7D7D7;
         box-shadow: 0  0.08rem 0.1rem rgba(91,91,91,0.1);
         @include e(item-detail item-operate) {
            padding: 0 0.31rem;
         }
			@include e(item-detail) {
				font-size: 0.24rem;
				color: #484848;
            border-bottom: 1px solid #E6E6E6;
            @include m(head) {
               @include  space-between;
            }
            @include m(date) {
               display: flex;
               align-items: center;
               width: 2.32rem;
               height: 0.54rem;
               background: #C3C3C3;
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
               @include when(valid) {
                  background: #FF9CC8;
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
				@include m(time-begin time-end) {
					>div {
						font-size: 0.48rem;
					}
				}
			}
         
         @include e(item-operate) {
            @include space-between;
            height: 1.52rem;
            font-size: 0.3rem;
            >button {
               height: 0.58rem; 
               width: 1.84rem;
               border-radius: 0.29rem;
            }
         }
         @include e(item-operate-doing) {
            >button {
               width: 6rem;
            }
         }
         @include e(item-operate-wating) {
            >button {
               width: 2.7rem;
            }
         }
		}
	}


</style>