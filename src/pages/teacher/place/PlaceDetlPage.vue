<template>
  <div 
    v-footer
    class="place-detail"
  >
    <div class="place-detail--header-bg"
      :style="{backgroundImage: 'url(' + place.imagesPath + ')'}">
      <dx-header></dx-header>
    </div>
    <div class="place-detail--cont">
      <p class="headline-upper-text">{{place.fieldName}}</p>
      <div class="place-detail--cont--icons">
        <div class="place-detail--cont--icon" v-if="place.siteLabel.indexOf('wifi') > -1">
          <div class="place-detail--cont--icon-wifi"></div>
          <p>Wifi</p>
        </div>
        <div class="place-detail--cont--icon" v-if="place.siteLabel.indexOf('停车场') > -1">
          <div class="place-detail--cont--icon-park"></div>
          <p>停车场</p>
        </div>
        <div class="place-detail--cont--icon" v-if="place.siteLabel.indexOf('液晶电视') > -1">
          <div class="place-detail--cont--icon-tv"></div>
          <p>液晶电视</p>
        </div>
        <div class="place-detail--cont--icon" v-if="place.siteLabel.indexOf('白板') > -1">
          <div class="place-detail--cont--icon-pen"></div>
          <p>白板</p>
        </div>
        <div class="place-detail--cont--icon" v-if="place.siteLabel.indexOf('空调') > -1">
          <div class="place-detail--cont--icon-air"></div>
          <p>空调</p>
        </div>
      </div>
      <div class="place-detail--cont-cells">
        <dx-cell-item>
          <template slot="left">
            <p class="detail-desc-text">场所地址</p>
            <p class="place-detail--cont-desc">{{place.fieldAddress}}</p>
          </template>
        </dx-cell-item>      
        <dx-cell-item>
          <template slot="left">
            <p class="place-detail--cont-desc">可容纳{{place.adaptCount}}人</p>
          </template>
        </dx-cell-item>
      </div>
      <!-- 评价内容 -->
      <div class="place-detail--cont-comm">
        <div class="place-detail--cont-comment">
          <p class="place-detail--cont-comment-text">场地评价</p>
          <p style="margin-right: 0.1rem;" class="place-detail--cont-comment-amount">{{place.evaluationCount > 99 ? '99+' : (place.evaluationCount || 0)}}</p>
          <dx-star :rating="Math.ceil(place.evaluationAvgGrade/2)" type="small"></dx-star>
        </div>
				<div 
          v-if="place.evaluationList && place.evaluationList.length !== 0">
					<dx-comment 
						v-for="item in place.evaluationList"
						:key="item.id" 
						:item="item">
					</dx-comment>
				</div>
        <div 
          v-if="place.evaluationList && place.evaluationList.length !== 0"
          class="place-detail--cont-comm-more"
          @click="goNext('/place/judge/' + place.id)"
          >查看全部评价</div>
      </div>
    </div>
    <!-- footer -->
    <price-footer 
      :btn-disabled="!place.openDateDTO"
      :to="'/place/book/' + place.id" 
      :price="'￥' + place.fieldAmount" 
      priceSmall="/小时" 
      :priceInfo="'评分' + (place.evaluationAvgGrade || 0)" 
      :btnText="place.openDateDTO ? '确定' : '全天已满'"
      >
    </price-footer>   
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import papi from 'api/placeApi.js'
  import PriceFooter from 'pages/common/PriceFooter.vue'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import mixin from 'utils/mixin.js'
  export default {
    mixins: [mixin],
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
        place: {
          siteLabel: ''
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.place-detail{
  &--header-bg{
    height: 4.14rem;
    background: #BAB7B1;
    // background: $--place-room-pic;
    background-size: 100% 100%;    
    header{
      padding-left: 0.4rem;
      padding-right: 0.4rem;
    }
  }
  &--cont{
    padding: 0.34rem 0.4rem;
    // padding-bottom: 1.2rem;
    &--icons{
      padding: 0.56rem 0 0.73rem;
      display: flex;
      border-bottom: 0.02rem #EBEBEB solid;
    }
    &--icon{
      text-align: center;
      flex-grow:1;
      >div{
        margin:auto;
        width: 0.76rem;
        height: 0.66rem;
        background-size: 100% 100%;
      }
      >p{
        font-size:0.28rem;
        color:#333333;
      }
      &-park{
        background: $--place-icon-big-park;
      }
      &-wifi{
        background: $--place-icon-big-wifi;
      }
      &-tv{
        background: $--place-icon-big-tv;
      }
      &-pen{
        background: $--place-icon-big-pen;
      }
      &-air{
        background: $--place-icon-big-air;
      }      
    }
    &-desc{
      font-size: 0.34rem;
      color: $--common-text-font-color;
    }
    &-comm{
      border-top: 0.02rem solid #e5e5e5;
      padding-top: 0.56rem; 
      &-more{
        font-size: 0.36rem;
        color: $--common-selectd-text-font-color;
      }      
    }
    &-comment{
      display: flex;
      align-items: center;
      &-text{
        font-size: 0.36rem;
        flex-grow: 1;
      }
      &-amount{
        font-size: 0.4rem;
      }
    }
  }
}
</style>