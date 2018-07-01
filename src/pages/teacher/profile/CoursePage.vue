<template>
   <div class="teacher-opening-course">
      <dx-header></dx-header>
	   <div class="teacher-opening-course--title">
	    	我的学员
	    </div>
	    <course-tab :tabs="tabs"></course-tab>
       <transition 
         name="router-slide"  
         mode='out-in'
      >
         <router-view class="full-screen"/>
      </transition>
   </div>
</template>
<script>
   import DxHeader from 'pages/common/HeaderPage.vue'
   import CourseTab from 'pages/common/CourseTab.vue'
   import mixin from 'utils/mixin.js'
   export default {
      mixins: [mixin],
      components: {
         DxHeader,
         CourseTab
      },
      data() {
         return {
            tabs: [
               {
                  title: '等待开课',
                  btns: [
                     {
                        isValid: false,
                        type: 'gray',
                        text: '取消课程'
                     },
                     {
                        text: '更换场地',
                         path: '/teacher/course/changePla'
                     },
                     {
                        text: '修改价格'
                     }
                  ]
               },
                {
                  title: '正在开课',
                  btns: [
                     {

                        text: '我的学员',
                        path: '/teacher/course/students'
                     }

                  ]
               },
                {
                  title: '课程结束',
                  isNoValid: true,
                  btns: [
                     {
                        text: '评价学员',
                        path: '/teacher/judgeStu'
                     },
                     {
                        text: '查看评价'
                     }
                  ]
               }
            ]
         }
      }
   }
</script>
<style scoped lang="scss">
	@include b(teacher-opening-course) {
		@include m(title) {
			font-size: 0.48rem;
			color: #484848;
		}
	}
</style>