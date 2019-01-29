<template>
  <div class="index-place" v-footer>
    <div>
      <div class="index-place--title">
        <p>{{regionInfo.fieldRegion}}</p>
        <div class="index-place--title-icon" @click="goNext('/region')"></div>
      </div>
      <div class="index-place--title-desc">
        <span>人气{{regionInfo.enterCount}}</span><span>·累计开课{{regionInfo.count}}</span>
        <!-- <span>·距离你3.5km</span> -->
      </div>
    </div>
    <div class="index-place--content">
      <div class="index-place--banner"></div>
      <div class="index-place--list">
        <dx-tabs v-model="tabValue" :tabs="tabs" @input="tabClick()"></dx-tabs>
        <ul class="index-place--row">
          <li class="index-place--row-item" v-for="item in placeList">
            <div class="flex-center" @click="goDetail(item.id)">
              <div class="index-place--row-pic"
                :style="{backgroundImage: 'url(' + item.imagesPath + ')'}"></div>
              <div class="index-place--row-detl">
                <p class="index-place--row-title subtitle-text">{{item.fieldName}}</p>
                <p class="index-place--row-text">{{item.fieldAddress}}</p>
                <p class="index-place--row-text">{{item.fieldOpenDate}}</p>
                <div class="index-place--row-info">
                  <div class="index-place--row-icon-group">
                    <div class="index-place--row-icon-wifi" v-if="item.siteLabel.indexOf('wifi') > -1"></div>
                    <div class="index-place--row-icon-park" v-if="item.siteLabel.indexOf('停车场') > -1"></div>
                    <div class="index-place--row-icon-tv" v-if="item.siteLabel.indexOf('液晶电视') > -1"></div>
                    <div class="index-place--row-icon-pen" v-if="item.siteLabel.indexOf('白板') > -1"></div>
                    <div class="index-place--row-icon-air" v-if="item.siteLabel.indexOf('空调') > -1"></div>
                  </div>
                  <div>
                    <div class="index-place--row-price">
                      <span>￥{{item.fieldAmount}}</span>
                      <span class="index-place--row-unit">/小时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="index-place--row-time flex-center"
              v-if="!item.openDateList || item.openDateList.length === 0">
              <p class="index-place--row-time-label" >全天已满</p>
            </div>
            <div class="index-place--row-time flex-center"
              v-if="item.openDateList && item.openDateList.length !== 0">
              <p class="index-place--row-time-label"
                v-for="time in item.openDateList" v-if="!time.reserveId"
                @click="goDetail(item.id)">{{time.openTime}}</p>
            </div>            
          </li>                   
        </ul>
      </div>
    </div>
    <dx-footer :selectTab="1"></dx-footer>
   	<transition 
			name="router"  
			mode='out-in'>
			<router-view class="full-screen"/>
		</transition>    
  </div>
</template>
<script>
  import Bus from 'utils/bus.js'
  import {mapState, mapMutations} from 'vuex'
  import papi from 'api/placeApi.js'
  import mixin from 'utils/mixin.js'
  import dayjs from 'dayjs'
	import DxFooter from 'pages/common/FooterPage.vue'
  export default {
    mixins: [mixin],
		components: {
			DxFooter
    },
    created() {
      this.contributeDates()
      Bus.$on('region.select', () => {
        this.getRegionInfo()
        this.getFieldList()
      }, this)
    },
		computed: {
			...mapState({
        selectedDate: state => state.selectPlaceDate,
        selectRegion: state => state.selectRegion,
        regionInfo: state => state.regionInfo,
        placeList: state => state.placeList
      }),
      tabValue: {
        get: function() {
          return this.selectedDate
        },
        set: function(val) {
          this.SET_SELECT_PLACE_DATE(val)
        }
      }
    },
    mounted() {
      this.getRegionInfo()
      this.getFieldList()
      if (!this.tabValue) {
        this.tabValue = dayjs().format('YYYY-MM-DD')
      }
    },
    methods: {
			...mapMutations([
        'SET_SELECT_PLACE_DATE',
        'SET_REGIONINFO',
        'SET_PLACELIST',
        'SET_OPENDATE_ID'
			]),
      getRegionInfo() {
				papi.getRegionInfo({rid: this.selectRegion}).then(r => {
					this.SET_REGIONINFO(r.data)
				})
      },
      getFieldList() {
        let date = null
        if (this.selectedDate) {
          date = this.selectedDate
        } else {
          date = dayjs().format('YYYY-MM-DD')
        }
				papi.getFieldList({rid: this.selectRegion, date: date}).then(r => {
					this.SET_PLACELIST(r.data)
				})
      },
      tabClick() {
        this.getFieldList()
      },
      goBookDetl(id, oid) {
        this.SET_OPENDATE_ID(oid)
        this.$router.push('place/book/' + id)
      },
      goDetail(id) {
        this.SET_OPENDATE_ID('')
        this.$router.push('place/detail/' + id)
      },
      contributeDates() {
        // 今天开始往后七天
        this.tabs = []
        for (var i = 0; i < 7; i++) {
          let obj = {
            label: dayjs().add(i, 'day').format('MM-DD ddd'),
            value: dayjs().add(i, 'day').format('YYYY-MM-DD')
          }
          i === 0 ? obj.label = '今天' : obj.label = obj.label
          i === 1 ? obj.label = '明天' : obj.label = obj.label
          this.tabs.push(obj)
        }
      }
    },
    data() {
      return {
        // tabValue: dayjs().format('MM-DD'),
        // tabActive: 0,
        tabs: []
      }
    }
  }
</script>
<style scoped lang="scss">
  @include b(index-place) {
    @include m(title) {
      display: flex;
      padding-top: 0.38rem;
      font-size: $--common-headline-font-size;
      align-items: center;
      >p{
        flex-grow: 1;
      }
    }
    @include m(title-icon) {
      background: $--place-headline-icon-background;
      background-size: 100% 100%;
      width: 0.88rem;
      height: 0.88rem;
    }
    @include m(title-desc) {
      font-size: $--common-illustration-text-font-size;
      padding-bottom: 0.45rem;
      color: $--common-subtitle-font-color;
    }
    @include m(content) {
      border-top: 0.02rem #EBEBEB solid;
      padding: 0.36rem 0;
    }
    @include m(banner) {
      height: 2.24rem;
      border-radius: 0.2rem;
      // background: #FF778C;
      background: $--place-banner;
      background-size: 100% 100%;
    }
    @include m(tab) {
      position: relative;
      padding-top: 0.5rem;
      padding-bottom: 0.14rem;
      width: 100%;
      overflow-x: scroll;
      // 父元素会根据字体撑开 需要设为0
      font-size: 0;
      white-space:nowrap;
    }
    @include m(tab-item) {
      color: $--common-text-font-color;
      font-size: 0.28rem;
      display: inline-block;
      padding-right: 0.65rem;
    }
    @include m(row) {
      li:last-child {
        border-bottom: none;
      }
    }    
    @include m(row-item) {
      padding: 0.56rem 0;
      border-bottom: 0.02rem #EBEBEB solid;
    }
    @include m(row-pic) {
      width: 2.1rem;
      height: 1.7rem;
      flex-shrink: 0;
      // background: $--place-room-pic;
      background-size: 100% 100%;
    }
    @include m(row-detl){
      padding-left: 0.3rem;
      width: 100%;
    }
    @include m(row-text) {
      font-size: 0.26rem;
      color: $--common-subtitle-font-color;
    }
    @include m(row-price) {
      font-size: $--common-subtitle-font-size;
      color: $--common-price-text-font-color;     
    }
    @include m(row-unit) {
      font-size: $--common-illustration-text-font-size; 
    }
    @include m(row-info) {
      padding-top: 0.17rem;      
      display: flex;
      width: 100%;
    }
    @include m(row-icon-group) {
      flex-grow: 1;
      display: flex;
      align-items: center;
      >div{
        height: 0.36rem;
        width: 0.36rem;
        background-size: 100% 100%;
        margin-right: 0.1rem;
      }
    }
    @include m(row-icon-wifi) {
      background: $--place-icon-wifi; 
    }
    @include m(row-icon-park) {
      background: $--place-icon-park; 
    }
    @include m(row-icon-tv) {
      background: $--place-icon-tv; 
    }
    @include m(row-icon-pen) {
      background: $--place-icon-pen; 
    }
    @include m(row-icon-air) {
      background: $--place-icon-air; 
    }
    @include m(row-time) {
      padding-top: 0.26rem;
      flex-wrap: wrap;
      >p{
        margin-top: 0.08rem;
        margin-right: 0.07rem;
        padding: 0.25rem 0;
        text-align: center;
      }
      >p:nth-child(4n){
        margin-right: 0;
      }
    }
    @include m(row-time-label) {
      width: 1.62rem;
      font-size: 0.2rem;
      background: #F5F5F5;
      color: $--common-subtitle-font-color;
    }           
  }
</style>