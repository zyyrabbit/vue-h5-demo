<template>
   <div class="teacher-opening-course">
    <dx-header></dx-header>
	   <div class="teacher-opening-course--title">
	    	我的学员
	    </div>
      <dx-tabs v-model="tabValue" :tabs="tabss" @input="tabClick()"></dx-tabs>
	    <course-tab :courses="courseList" :state="this.tabValue"></course-tab>
       <transition 
         name="router-slide"  
         mode='out-in'
      >
         <router-view class="full-screen"/>
      </transition>
   </div>
</template>
<script>
  import papi from 'api/periodApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import DxFooter from 'pages/common/FooterPage.vue'
  import CourseTab from 'pages/common/CourseTab.vue'
  import mixin from 'utils/mixin.js'
  export default {
    mixins: [mixin],
    components: {
      CourseTab,
      DxHeader,
      DxFooter
    },
    mounted() {
      this.getPeriodList()
    },
    methods: {
      tabClick() {
        this.courseList = []
        this.getPeriodList()
      },
      getPeriodList() {
        papi.getPeriodList({state: this.tabValue}).then(r => {
					this.courseList = (r.data)
				})
      }
    },
  // '评价学员','/teacher/judgeStu'
  // '我的学员', '/teacher/course/students'
  // '更换场地', '/teacher/course/changePla'
    data() {
      return {
        courseList: [],
        tabValue: 0,
        tabss: [{
          label: '等待开课',
          value: 0
        }, {
          label: '正在开课',
          value: 1
        }, {
          label: '课程结束',
          value: 2
        }]
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