<template>
   <div class="teacher-opening-course">
      <dx-header></dx-header>
	  <div class="teacher-opening-course--title">
	    	我的课程
	    </div>
	    <course-tab :tabs="tabs"></course-tab>
   </div>
</template>
<script>
   import DxHeader from '../../common/HeaderPage.vue'
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
                        text: '更换场地'
                     },
                     {
                        text: '修改价格'
                     }
                  ]
               },
                {
                  title: '正在开课'
               },
                {
                  title: '课程结束',
                  isNoValid: true,
                  btns: [
                     {
                        text: '评价学员'
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