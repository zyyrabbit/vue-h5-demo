<template>
   <div class="index-course">
	    <div class="index-course--title">
	    	我的课程
	    </div>
	    <course-tab :tabs="tabs"></course-tab>
   </div>
</template>
<script>
   import CourseTab from 'pages/common/CourseTab.vue'
   import mixin from 'utils/mixin.js'
   export default {
      mixins: [mixin],
      components: {
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
                        text: '取消课程'
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