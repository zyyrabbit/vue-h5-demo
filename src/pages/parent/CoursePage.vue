<template>
   <div class="index-course">
	    <div class="index-course--title">
	    	我的课程
	    </div>
       <course-tab :tabs="tabs"></course-tab>
            <!-- <div  
               v-show="selectTabIndex === 0 && !isValid"
               class="index-course-list__item-operate index-course-list__item-operate-wating">
               <span>退款成功</span>
               <dx-button  
                  type="primary" 
                  @dx-button-click="goNext('course/bill')"
               >
                  查看退款
               </dx-button>
            </div> -->
       <dx-footer :selectTab="1"></dx-footer>
       <transition 
         name="router-slide"  
         mode='out-in'
      >
         <router-view class="full-screen"/>
      </transition>
   </div>
</template>
<script>
   import DxFooter from 'pages/common/FooterPage.vue'
   import CourseTab from 'pages/common/CourseTab.vue'
   import mixin from 'utils/mixin.js'
   export default {
      mixins: [mixin],
      components: {
         CourseTab,
         DxFooter
      },
      data() {
         return {
            tabs: [
               {
                  title: '待上课',
                  btns: [
                     {
                        type: 'gray',
                        text: '取消课程'
                     },
                     {
                        text: '联系老师'
                     }
                  ]
               },
                {
                  title: '正在上课',
                  btns: [
                     {
                        type: 'pinking',
                        text: '视频直播'
                     }
                  ]
               },
                {
                  title: '已上课',
                  isNoValid: true,
                  btns: [
                     {
                        text: '再次学习'
                     },
                     {
                        text: '评价课程',
                        path: '/course/judge'
                     },
                     {
                        text: '已确认上课'
                     }
                  ]
               }
            ]
         }
      }
   }
</script>
<style scoped lang="scss">
	@include b(index-course) {
      padding-top: 0.56rem;
		@include m(title) {
			font-size: 0.48rem;
			color: #484848;
		}
	}
</style>