<template>
  <div
    v-footer 
    class="place-book"
  >
    <dx-header></dx-header>
    <p class="headline-upper-text">预订场地</p>
    <div class="place-book-info">
      <div class="place-book-info-pic"
        :style="{backgroundImage: 'url(' + place.imagesPath + ')'}"
      ></div>
      <div class="place-book-info-detl">
        <div class="place-book-info-comment">
          <p class="place-book-comment-amount">{{place.evaluationCount > 99 ? '99+' : (place.evaluationCount || 0)}}</p>
          <dx-star :rating="0"  type="small"></dx-star>
        </div>
        <p class="place-book-info-name">{{place.fieldName}}</p>
        <div class="place-book-icon-group">
          <div class="place-book-icon-group-wifi" v-if="place.siteLabel.indexOf('wifi') > -1"></div>
          <div class="place-book-icon-group-park" v-if="place.siteLabel.indexOf('停车场') > -1"></div>
          <div class="place-book-icon-group-tv" v-if="place.siteLabel.indexOf('液晶电视') > -1"></div>
          <div class="place-book-icon-group-pen" v-if="place.siteLabel.indexOf('白板') > -1"></div>
          <div class="place-book-icon-group-air" v-if="place.siteLabel.indexOf('空调') > -1"></div>
        </div>
      </div>
    </div>
    <div class="place-book-list">
      <dx-cell-item>
        <template slot="left">
          <p>场地地址</p>
        </template>
        <template slot="right">
          <p>{{place.fieldAddress}}</p>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p>场地单价</p>
        </template>
        <template slot="right">
          <p>￥{{place.fieldAmount}}/半小时</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access :to="'/place/book/' + place.id + '/opendate'">
        <template slot="left">
          <p>预订时间</p>
        </template>
        <template slot="right">
          <p v-if="!openDateDisplayList || openDateDisplayList.length === 0">请选择</p>
          <p style="font-size:0.32rem;" v-for="item in openDateDisplayList">{{item}}</p>
        </template>
      </dx-cell-item>
      <!-- <dx-cell-item can-access :to="'/place/book/' + place.id + '/opendate'">
        <template slot="left">
          <p>预订日期</p>
        </template>
        <template slot="right">
          <p>{{selectedDate | formatInPeriod}}</p>
        </template>
      </dx-cell-item> -->
      <!-- <dx-cell-item can-access>
        <template slot="left">
          <p>重复预订</p>
        </template>
        <template slot="right">
          <p>不重复</p>
        </template>
      </dx-cell-item> -->
      <!-- <dx-cell-item can-access>
        <template slot="left">
          <p>开始时间</p>
        </template>
        <template slot="right">
          <p>{{place.startTime}}</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>结束时间</p>
        </template>
        <template slot="right">
          <p>{{place.endTime}}</p>
        </template>
      </dx-cell-item> -->
      <dx-cell-item>
        <template slot="left">
          <p>时长合计</p>
        </template>
        <template slot="right">
          <p>{{openDateBetween || 0}}小时</p>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p>折扣</p>
        </template>
        <template slot="right">
          <p>-</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>付款方式</p>
        </template>
        <template slot="right">
          <p>支付宝(默认)</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>注意：三天前可取消场地</p>
        </template>
      </dx-cell-item>
    </div>
    <price-footer 
      @price-footer-click="createOrder()"
      :price="'￥' + (place.fieldAmount * (openDateBetween || 0) * 2)" 
      priceSmall=""
      :priceInfo="'￥' + place.fieldAmount + ' x ' +  (openDateBetween || 0) * 2 + ' x 半小时'" 
      btnText="立即支付"
    >
    </price-footer> 
    <transition 
			name="router-slide"  
			mode='out-in'>
			<router-view class="full-screen"/>
		</transition>    
  </div>
</template>
<script>
  import Bus from 'utils/bus.js'
  import dayjs from 'dayjs'
  import {mapState, mapMutations} from 'vuex'
  import papi from 'api/placeApi.js'
  import oapi from 'api/orderApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import PriceFooter from 'pages/common/PriceFooter.vue'
  export default {
		components: {
			PriceFooter, DxHeader
    },
    created() {
      Bus.$on('opendate.select', () => {
        this.getPlaceDetl()
      }, this)
    },
    mounted() {
      this.SET_OPENDATE_IDS([])
      this.SET_OPENDATE_LIST([])
      this.getPlaceDetl()
    },
    methods: {
			...mapMutations([
        'SET_OPENDATE_ID',
        'SET_OPENDATE_IDS',
        'SET_OPENDATE_LIST'
			]),
      getPlaceDetl() {
        let param = {id: this.id, openDate: this.selectedDate}
        if (this.openDateId) {
          param.openDateId = this.openDateId
        }
				papi.getFieldDetl(param).then(r => {
          this.place = r.data
          // 处理数据
          // this.place.startTime = this.place.openDateDTO.openTime.split('-')[0]
          // this.place.endTime = this.place.openDateDTO.openTime.split('-')[1]
          // this.place.betweenTime = this.dataBetween(this.place.startTime, this.place.endTime)
          // if (!this.openDateId) {
          //   this.SET_OPENDATE_ID(this.place.openDateDTO.oId)
          // }
				})
      },
      dateBetween(startTime, endTime) {
        const st = dayjs('2001-01-01 ' + startTime)
        const et = dayjs('2001-01-01 ' + endTime)
        return et.diff(st, 'hours', true)
      },
      createOrder() {
        if (!this.openDateBetween) {
          alert('请先选择需要预订的时间')
          return
        }
        console.info('create order')
        let param = {
          // orderType: 'FIELD',
          payType: 'ALIPAY',
          giftId: null,
          phone: this.phone || '',
          // reserveDate: this.selectedDate,
          fieldId: this.id,
          fieldDateList: this.openDateDisplayList
          // openDate: this.place.openDateDTO.openTime
        }
        console.info(param)
        oapi.createFieldOrder(param).then(r => {
					const orderNumber = r.data
					if (orderNumber) {
						oapi.fakeOrderSuccess({orderNumber: orderNumber}).then(r => {
							alert('预订成功!')
              // this.$router.push('/place/success')
              this.$router.push('/profile')
						})
					}
        })
      }
    },
		computed: {
			...mapState({
        selectedDate: state => state.selectPlaceDate,
        openDateId: state => state.openDateId,
        phoneNumber: state => state.userInfo.phoneNumber,
        openDateDisplayList: state => state.openDateList
      }),
      openDateBetween: function() {
        let that = this
        let count = 0
        this.openDateDisplayList.forEach(i => {
          let time = i.split('/')[1]
          count += that.dateBetween(time.split('-')[0], time.split('-')[1])
        })
        return count
      },
			phone: {
				get: function() {
					return this.phoneNumber
				},
				set: function() {
				}
			}
    },
    data() {
      return {
        id: this.$route.params.id,
        place: {
          siteLabel: '',
          openDateDTO: {}
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.place-book{
  padding: 0.3rem 0.4rem;
  font-size: $--common-subtitle-font-size;
  color: $--common-text-font-color;
  &-info{
    display: flex;
    align-items: center;
    padding: 0.5rem 0 0.65rem 0;
    border-bottom: 0.02rem solid #e5e5e5;
    &-pic{
      width: 2.33rem;
      height: 1.9rem;
      // background: $--place-room-pic;
      background-size: 100% 100%;
      border-radius: 0.1rem;
    }
    &-detl{
      flex-grow: 1;
      text-align: right;
    }
    &-comment{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      line-height: 0;
    }
    &-name{
      padding: 0.2rem 0 0.3rem 0;
      font-size: 0.44rem;
    }
  }
  &-icon-group{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    >div{
      height: 0.36rem;
      width: 0.36rem;
      background-size: 100% 100%;
      margin-left: 0.2rem;
    }
    &-wifi{
      background: $--place-icon-wifi; 
    }
    &-park{
      background: $--place-icon-park; 
    }
    &-tv{
      background: $--place-icon-tv; 
    }
    &-pen{
      background: $--place-icon-pen; 
    }
    &-air{
      background: $--place-icon-air; 
    }
  }
  &-comment-amount{
    font-size: $--common-button-text-font-size;
    margin-right: 0.05rem;
  }
}
</style>