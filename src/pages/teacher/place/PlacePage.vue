<template>
  <div class="index-place" v-footer>
    <div>
      <div class="index-place--title">
        <p>南京市仙林校区</p>
        <div class="index-place--title-icon" @click="goTo('/place/select')"></div>
      </div>
      <div class="index-place--title-desc">
        <span>人气10288</span><span>·累计开课278</span>
        <!-- <span>·距离你3.5km</span> -->
      </div>
    </div>
    <div class="index-place--content">
      <div class="index-place--banner"></div>
      <div class="index-place--list">
        <dx-tabs v-model="tabValue" :tabs="tabs"></dx-tabs>
        <ul class="index-place--row" @click="goTo('/place/detail')">
          <li class="index-place--row-item">
            <div class="flex-center">
              <div class="index-place--row-pic"></div>
              <div class="index-place--row-detl">
                <p class="index-place--row-title subtitle-text">南师大文渊楼305室</p>
                <p class="index-place--row-text">江苏省南京市近郊栖霞区文苑路</p>
                <p class="index-place--row-text">开放时间: 每天9:00 ~ 20:00</p>
                <div class="index-place--row-info">
                  <div class="index-place--row-icon-group">
                    <div class="index-place--row-icon-wifi"></div>
                    <div class="index-place--row-icon-park"></div>
                    <div class="index-place--row-icon-tv"></div>
                    <div class="index-place--row-icon-pen"></div>
                    <div class="index-place--row-icon-air"></div>
                  </div>
                  <div>
                    <div class="index-place--row-price">
                      <span>￥60</span>
                      <span class="index-place--row-unit">/小时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="index-place--row-time flex-center">
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">11:00 ~ 10:00</p>
            </div>
          </li>
          <li class="index-place--row-item">
            <div class="flex-center">
              <div class="index-place--row-pic"></div>
              <div class="index-place--row-detl">
                <p class="index-place--row-title subtitle-text">南师大文渊楼305室</p>
                <p class="index-place--row-text">江苏省南京市近郊栖霞区文苑路</p>
                <p class="index-place--row-text">开放时间: 每天9:00 ~ 20:00</p>
                <div class="index-place--row-info">
                  <div class="index-place--row-icon-group">
                    <div class="index-place--row-icon-wifi"></div>
                    <div class="index-place--row-icon-park"></div>
                    <div class="index-place--row-icon-tv"></div>
                    <div class="index-place--row-icon-pen"></div>
                    <div class="index-place--row-icon-air"></div>
                  </div>
                  <div>
                    <div class="index-place--row-price">
                      <span>￥60</span>
                      <span class="index-place--row-unit">/小时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="index-place--row-time flex-center">
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">11:00 ~ 10:00</p>
            </div>
          </li>
          <li class="index-place--row-item">
            <div class="flex-center">
              <div class="index-place--row-pic"></div>
              <div class="index-place--row-detl">
                <p class="index-place--row-title subtitle-text">南师大文渊楼305室</p>
                <p class="index-place--row-text">江苏省南京市近郊栖霞区文苑路</p>
                <p class="index-place--row-text">开放时间: 每天9:00 ~ 20:00</p>
                <div class="index-place--row-info">
                  <div class="index-place--row-icon-group">
                    <div class="index-place--row-icon-wifi"></div>
                    <div class="index-place--row-icon-park"></div>
                    <div class="index-place--row-icon-tv"></div>
                    <div class="index-place--row-icon-pen"></div>
                    <div class="index-place--row-icon-air"></div>
                  </div>
                  <div>
                    <div class="index-place--row-price">
                      <span>￥60</span>
                      <span class="index-place--row-unit">/小时</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="index-place--row-time flex-center">
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">9:00 ~ 10:00</p>
              <p class="index-place--row-time-label">11:00 ~ 10:00</p>
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
	import DxFooter from 'pages/common/FooterPage.vue'
  export default {
		components: {
			DxFooter
		},
    methods: {
      goTo(path) {
        this.$router.push({ path })
      }
    },
    computed: {
    },
    data() {
      return {
        tabValue: '05-05',
        tabs: [{
          label: '05-05',
          value: '05-05'
        }, {
          label: '05-06',
          value: '05-06'
        }, {
          label: '05-07',
          value: '05-07'
        }, {
          label: '05-08',
          value: '05-08'
        }, {
          label: '05-09',
          value: '05-09'
        }, {
          label: '05-10',
          value: '05-10'
        }]
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
      background: $--place-room-pic;
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