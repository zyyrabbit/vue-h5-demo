<template>
    <div class="teacher-course-place">
        <dx-header>
            <span 
              slot="next" 
              class="teacher-course-place--book"
              @click="goNext('/place')"
            >预定</span>
        </dx-header>
        <div class="teacher-course-place--title">
            我的场地
        </div>
        <dx-tabs 
          v-model="tabValue" 
          :tabs="tabs"
        ></dx-tabs>
        <ul class="teacher-course-place__detail">   
          <li v-for="place in placeList" :key="place.id" v-if="(tabValue===1 && place.pId!==null) || (tabValue===0 && place.pId===null)">
            <p>{{place.fieldName}}</p>
            <p>场地时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
            <p>开课时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
            <div class="button-list">
              <dx-button type='gray' @dx-button-click="goNext('/teacher/judgeStu/')">退订</dx-button>
              <dx-button type='pinking' @dx-button-click="goNext('/teacher/course/changePla/')">开课</dx-button>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
	import papi from 'api/placeApi.js'
  import mixin from 'utils/mixin.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonList from 'pages/common/ButtonList.vue'
  export default {
    components: {
        DxHeader,
        ButtonList
    },
    mixins: [mixin],
    data() {
      return {
        placeList: [],
        tabValue: 0,
        tabs: [
          {
            label: '未使用',
            value: 0
          },
          {
            label: '已使用',
            value: 1
          }
        ]
      }
    },
    computed: {
        isHasBtns() {
            return !!this.tabs[this.tabValue].btns.length
        }
    },
    mounted() {
      this.getMyPlace()
    },
    methods: {
      getMyPlace() {
        papi.getUserField().then(r => {
					this.placeList = r.data
				})
      }
    }
  }
</script>
<style scoped lang="scss">
  @include b(teacher-course-place) {
    padding: 0.4rem;
    color: #484848;
    font-size: 0.36rem;
    @include m(book) {
        color: #57B8D7;
    }
    @include m(title) {
        font-size: 0.6rem;
    }
    /* 具体内容 */
    @include e(detail) {
        margin-top: 0.54rem;
        >li>p {
            margin-bottom: 0.21rem;
        }
        @include m(btns) {
            height: 0.92rem;
        }
    }
  }
</style>