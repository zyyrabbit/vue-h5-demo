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
      <ul class="teacher-course-place__detail"> 
        <dx-cell-item v-for="place in placeList" :key="place.id">
          <li slot="left">
              <p>{{place.fieldName}}</p>
              <div class="small-text" v-for="(item, index) in place.fieldList" :key="index">
                <p>场地时间:{{item.reserveDate | formatDate}} {{item.reserveTime}}</p>
                <p class="blue" v-if="!item.periodDate && !isBeforeNow(item.reserveDate)">未使用</p>
                <p class="red" v-if="!item.periodDate && isBeforeNow(item.reserveDate)">已过期</p>
                <p v-if="item.periodDate">已使用</p>
              </div>
              <!-- <p>开课时间:{{place.reserveDate | formatDate}} {{place.reserveTime}}</p> -->
              <div v-if="!cantRefund(place.fieldList)" class="button-list">
                <dx-button type='gray' @dx-button-click="refund(place.orderNumber)">退订</dx-button>
                <!-- <dx-button type='pinking' @dx-button-click="goNext('/teacher/course/all')">开课</dx-button> -->
              </div>
              <div v-if="cantRefund(place.fieldList)" style="padding-bottom: 0.56rem"></div>
          </li>
        </dx-cell-item>
        <dx-cell-item v-if="!placeList || placeList.length === 0">
          <p slot="left">暂无预订的场地信息</p>
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
  import oapi from 'api/orderApi.js'
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
        placeList: []
      }
    },
    computed: {
    },
    mounted() {
      this.getPlace()
    },
    methods: {
      // 未使用
      getPlace() {
        papi.getFieldByOrder().then(r => {
					this.placeList = r.data
				})
      },
      isBeforeNow(time) {
        return dayjs(time).isBefore(dayjs())
      },
      cantRefund(item) {
        let that = this
        return item.some(i => {
          return i.periodDate !== null || that.isBeforeNow(i.reserveDate)
        })
      },
      refund(orderId) {
        oapi.refundOrder(orderId).then(r => {
          alert('退订成功!')
          this.getPlace()
				}).catch(() => {
          alert('场地退订失败,请稍候再试!')
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
      // margin-top: 0.54rem;
      >li>p {
        margin-bottom: 0.21rem;
      }
      @include m(btns) {
        height: 0.92rem;
      }
      .dx-cell-item{
        padding-bottom: 0;
      }
      .small-text{
        font-size: 0.28rem;
        padding-top: 0.02rem;
        display: flex;
        justify-content: space-between;
        .blue{
          color: #57B8D7;
        }
        .red{
          color: red;
        }
      }
    }
  }
</style>