<template>
   <div class="index-course" v-footer>
     <dx-header v-if="fromProfile"></dx-header>
      <div class="index-course--title">
        我的课程
      </div>
      <dx-tabs v-model="tabValue" :tabs="tabss" @input="tabClick()"></dx-tabs>
      <course-tab :courses="courseList" :state="this.tabValue"></course-tab>
      <dx-footer v-if="!fromProfile" :selectTab="1"></dx-footer>
      <transition 
        name="router-slide"  
        mode='out-in'>
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
      DxFooter,
      DxHeader
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
    data() {
      return {
        courseList: [],
        tabValue: 0,
        tabss: [{
          label: '待上课',
          value: 0
        }, {
          label: '正在上课',
          value: 1
        }, {
          label: '已上课',
          value: 2
        }],
        // 是否从'我的'进入
        fromProfile: this.$route.params.profile
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