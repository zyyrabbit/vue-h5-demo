<template>
  <div class="place-relate">
    <dx-header></dx-header>
    <p class="headline-upper-text">关联您的课程</p>
    <div class="place-relate-list">
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程名称</p>
          <div class="place-relate-detl">
            <dx-select
              v-if="courseList"
              v-model="courseId"
              :options="courseList"
              value-key="id"
              label-key="courseName"
              placeholder="请选择课程">
            </dx-select>
            <p v-if="!courseList">无可关联课程</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">开课时间</p>
          <div class="place-relate-detl">
            <p>{{place.reserveDate | formatDate}} {{reserveTime}}</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程价格</p>
          <dx-input
            v-model="periodMoney"
            :inputStyle = "inputStyle"
            placeholder="请输入课程价格(每学员)">
          </dx-input>
        </template>
      </dx-cell-item>
    </div>
    <button-footer @button-footer-click="submitRelate()" btnText="确定">
    </button-footer>    
  </div>
</template>
<script>
	import papi from 'api/placeApi.js'
  import capi from 'api/courseApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonFooter from 'pages/common/ButtonFooter.vue'
  export default {
		components: {
			ButtonFooter, DxHeader
		},
    mounted() {
      console.info(this.$route.params.reserveTime)
      this.getCourseList()
    },
    methods: {
			getCourseList() {
				capi.getCourseByUser().then(r => {
          console.info(r.data)
          this.courseList = r.data
				})
      },
      submitRelate() {
        if (!this.courseId || !this.periodMoney || !this.reserveId) {
          alert('请完整填写')
          return
        }
        let param = {
          courseId: this.courseId,
          periodMoney: this.periodMoney,
          reserveId: this.reserveId
        }
        papi.submitRelate(param).then(r => {
          alert('关联成功')
          this.$router.go(-2)
				})
      }
    },
    computed: {
    },
    data() {
      return {
        // 场地预订id
        reserveId: this.$route.params.reserveId,
        place: this.$route.params.place || {},
        reserveTime: this.$route.params.reserveTime,
        inputStyle: {
          marginTop: '0.2rem',
          padding: 0,
          border: 'none',
          color: '#57B8D7',
          fontSize: '0.36rem'
        },
        periodMoney: '',
        courseId: '',
        courseList: []
      }
    }
  }
</script>
<style scoped lang="scss">
.place-relate{
  select{
    color: $--common-selectd-text-font-color;
  }  
  padding: 0.3rem 0.4rem;
  &-title{
    font-size: 0.28rem;
    color: $--common-text-font-color;
  }
  &-detl{
    margin-top: 0.2rem;
    font-size: $--common-subtitle-font-size;
    color: $--common-selectd-text-font-color;    
  }
}
</style>