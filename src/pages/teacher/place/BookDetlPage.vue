<template>
  <div
    v-footer 
    class="place-book"
  >
    <dx-header></dx-header>
    <p class="headline-upper-text">预订场所</p>
    <div class="place-book-info">
      <div class="place-book-info-pic"></div>
      <div class="place-book-info-detl">
        <div class="place-book-info-comment">
          <p class="place-book-comment-amount">99+</p>
          <dx-star :rating=3 type="small"></dx-star>
        </div>
        <p class="place-book-info-name">{{place.fieldName}}</p>
        <div class="place-book-icon-group">
          <div class="place-book-icon-group-wifi"></div>
          <div class="place-book-icon-group-park"></div>
          <div class="place-book-icon-group-tv"></div>
          <div class="place-book-icon-group-pen"></div>
          <div class="place-book-icon-group-air"></div>
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
          <p>￥{{place.fieldAmount}}/小时</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>预订日期</p>
        </template>
        <template slot="right">
          <p>{{place.openDateDTO.openDate | formatInPeriod}}</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>重复预订</p>
        </template>
        <template slot="right">
          <p>不重复</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>开始时间</p>
        </template>
        <template slot="right">
          <p>{{place.openDateDTO.openTime.split('-')[0]}}</p>
        </template>
      </dx-cell-item>
      <dx-cell-item can-access>
        <template slot="left">
          <p>结束时间</p>
        </template>
        <template slot="right">
          <p>{{place.openDateDTO.openTime.split('-')[1]}}</p>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p>时长合计</p>
        </template>
        <template slot="right">
          <p>{{dataBetween(place.openDateDTO.openTime.split('-')[0], place.openDateDTO.openTime.split('-')[1])}}小时</p>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p>折扣</p>
        </template>
        <template slot="right">
          <p>8.5折</p>
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
          <p>注意：不足一小时,按一小时算,三天前可取消</p>
        </template>
      </dx-cell-item>
    </div>
    <price-footer 
        to="/place/success" 
        price="￥60" 
        priceSmall="/小时" 
        priceInfo="￥60 x 6小时" 
        btnText="立即支付"
    >
    </price-footer>    
  </div>
</template>
<script>
  import dayjs from 'dayjs'
  import {mapState} from 'vuex'
  import papi from 'api/placeApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import PriceFooter from 'pages/common/PriceFooter.vue'
  export default {
		components: {
			PriceFooter, DxHeader
		},
    mounted() {
      this.getPlaceDetl()
    },
    methods: {
      getPlaceDetl() {
				papi.getFieldDetl({id: this.id, openDate: this.selectedDate}).then(r => {
					this.place = r.data
				})
      },
      dataBetween(startTime, endTime) {
        const st = dayjs('2001-01-01 ' + startTime)
        const et = dayjs('2001-01-01 ' + endTime)
        return et.diff(st, 'hours')
      }
    },
		computed: {
			...mapState({
        selectedDate: state => state.selectPlaceDate
      })
    },
    data() {
      return {
        id: this.$route.params.id,
        oid: this.$route.params.oid,
        place: {}
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
      background: $--place-room-pic;
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
  }
}
</style>