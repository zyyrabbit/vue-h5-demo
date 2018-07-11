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
      <ul class="teacher-course-place__detail" v-if="tabValue===0"> 
        <dx-cell-item v-for="place in placeNotUseList" :key="place.reserveId">
          <li slot="left">
              <p>{{place.fieldName}}</p>
              <p>场地时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
              <!-- <p>开课时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p> -->
              <div class="button-list">
                <dx-button type='gray' @dx-button-click="">退订</dx-button>
                <dx-button type='pinking' @dx-button-click="goRelate(place)">开课</dx-button>
              </div>
          </li>
        </dx-cell-item>
      </ul>
      <ul class="teacher-course-place__detail" v-if="tabValue===1"> 
        <dx-cell-item v-for="place in placeUsedList" :key="place.reserveId">  
          <li slot="left">
            <p>{{place.fieldName}}</p>
            <p>场地时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
            <p>开课时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
          </li>
        </dx-cell-item>
      </ul>      
      <transition 
        name="router-slide"  
        mode='out-in'>
        <router-view class="full-screen"/>
      </transition>           
    </div>
</template>
<script>
  import dayjs from 'dayjs'
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
        placeUsedList: [],
        placeNotUseList: [],
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
    },
    mounted() {
      this.getNotUsePlace()
      this.getUsedPlace()
    },
    methods: {
      // 未使用
      getNotUsePlace() {
        papi.getUserField().then(r => {
					this.placeNotUseList = r.data
				})
      },
      // 已使用
      getUsedPlace() {
        papi.getUserOpenField().then(r => {
					this.placeUsedList = r.data
				})
      },
      isBeforeNow(time) {
        return dayjs().isBefore(dayjs(time))
      },
      goRelate(item) {
        this.$router.push({name: 'relate', params: item})
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
        // margin-top: 0.54rem;
        >li>p {
            margin-bottom: 0.21rem;
        }
        @include m(btns) {
            height: 0.92rem;
        }
    }
  }
</style>