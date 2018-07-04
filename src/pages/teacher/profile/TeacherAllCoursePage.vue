<template>
  <div class="teacher-all-course">
    <dx-header>
      <span 
        slot="next" 
        class="teacher-all-course--add"
      >新增</span>
    </dx-header>
    <div class="teacher-all-course--title">
        我的课程
    </div>
    <ul class="teacher-all-course__detail">   
      <li 
        v-for="course of courseList"
        :key="course.id">
        <p class="teacher-all-course__detail--course-name">{{course.courseName}}</p>
        <div class="button-list">
          <dx-button type='gray' @dx-button-click="">删除课程</dx-button>
          <dx-button type='primary' @dx-button-click="">修改课程</dx-button>
          <dx-button type='pinking' @dx-button-click="">开课</dx-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import capi from 'api/courseApi.js'
  import mixin from 'utils/mixin.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonList from 'pages/common/ButtonList.vue'
  export default {
    components: {
        DxHeader,
        ButtonList
    },
    mixins: [mixin],
    computed: {
      ...mapState({
        courseList: state => state.courseList
      })
    },
    mounted() {
      this.getCourseList()
    },
		methods: {
			...mapMutations([
				'SET_COURSELIST'
      ]),
			getCourseList() {
				capi.getCourseByUser().then(r => {
					console.info(r)
					this.SET_COURSELIST(r.data)
				})
			}
    },
    data() {
      return {
      }
    }
  }
</script>
<style lang="scss">
@include b(teacher-all-course) {
  padding: 0.4rem;
  color: #484848;
  font-size: 0.34rem;
  @include m(add) {
      color: #57B8D7;
  }
  @include m(title) {
      font-size: 0.6rem;
  }
  /* 具体内容 */
  @include e(detail) {
    margin-top: 0.25rem;
    >li:not(:last-child) {
        border-bottom: 0.02rem solid #EBEBEB;
    }
    @include m(course-name) {
        padding-top: 0.53rem;
    }
    @include m(btns) {
        padding: {
            top: 0.58rem;
            bottom: 0.58rem;
        }
        height: 0.58rem !important;
    }
  }
}

</style>