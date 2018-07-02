<template>
   <div class="course-tab">
	    <ul class="course-tab__status clearfix">
         <li 
            v-for="(tab, index) in tabs"
            :class="{'is-active': selectTabIndex === index}"
            :key="index"
            @click="selectTab(index)"
         >
            {{tab.title}}<div data-desc="border-bottom"></div>

         </li>
	    </ul>
	    <ul class="course-tab-list">
	    	<li class="course-tab-list__item">
	    		<div class="course-tab-list__item-detail">
	    			<div class="course-tab-list__item-detail--head">
	    				<span
                     :class="{'is-no-valid': tabs[selectTabIndex].isNoValid}" 
                     class="course-tab-list__item-detail--date"
                  >
                     <span></span>
                     <span>4月26号 周四</span>
                  </span>
	    				<span class="course-tab-list__item-detail--sign-up-number">2人报名</span>
	    			</div>
	    			<div class="course-tab-list__item-detail--content">
	    				<p class="course-tab-list__item-detail--title">带孩子走进故事王国</p>
	    				<p class="course-tab-list__item-detail--classroom">西溪湿地商务园区1号教室</p>
	    				<p class="course-tab-list__item-detail--open-time">开放时间: 2018年4月26日 07:00~20:00</p>
	    				<p class="course-tab-list__item-detail--place">详细地址: 西湖区文二西路551号好西城广场4楼</p>
	    			</div>
	    			<div class="course-tab-list__item-detail--time">
	    				<div class="course-tab-list__item-detail--time-begin">
	    					<div>07:00</div>开始
	    				</div>
	    				<div class="course-tab-list__item-detail--time-during">2小时</div>
	    				<div class="course-tab-list__item-detail--time-end">
	    					<div>09:00</div>结束
	    				</div>
	    			</div>
	    		</div>
            <div 
               v-if="isShowBottom"
               class="course-tab-list__item-operate"
            >  
               <p v-if="tabs[selectTabIndex].text">{{tabs[selectTabIndex].text}}</p>
               <button-list :btns="tabs[selectTabIndex].btns"></button-list>
            </div>
	    	</li>
	    </ul>
   </div>
</template>
<script>
   import mixin from 'utils/mixin.js'
   import ButtonList from 'pages/common/ButtonList.vue'
   export default {
      components: {
         ButtonList
      },
      mixins: [mixin],
      props: {
         tabs: {
            type: Array,
            default: function() {
               return []
            }
         }
      },
      data() {
         return {
            selectTabIndex: 0
         }
      },
      computed: {
         isShowBottom() {
            let selectTab = this.tabs[this.selectTabIndex]
            return selectTab && (selectTab.text || (selectTab.btns && selectTab.btns.length))
         }
      },
      methods: {
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
                        height: 0.01rem;
                        width: 0.34rem;
                        background: #7E7E7E;
                        left: -0.4rem;
                        top: 42%;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        height: 0.01rem;
                        width: 0.34rem;
                        background: #7E7E7E;
                        top: 42%;
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
            >button {
               width: 2.7rem;
            }
         }
		}
	}


</style>