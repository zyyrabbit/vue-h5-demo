<template>
  <div 
    v-footer
    class="place-detail"
  >
    <div class="place-detail--header-bg"></div>
    <div class="place-detail--cont">
      <p class="headline-upper-text">南师大文渊楼305室</p>
      <div class="place-detail--cont--icons">
        <div class="place-detail--cont--icon">
          <div class="place-detail--cont--icon-wifi"></div>
          <p>Wifi</p>
        </div>
        <div class="place-detail--cont--icon">
          <div class="place-detail--cont--icon-park"></div>
          <p>停车场</p>
        </div>
        <div class="place-detail--cont--icon">
          <div class="place-detail--cont--icon-tv"></div>
          <p>液晶电视</p>
        </div>
        <div class="place-detail--cont--icon">
          <div class="place-detail--cont--icon-pen"></div>
          <p>白板</p>
        </div>
        <div class="place-detail--cont--icon">
          <div class="place-detail--cont--icon-air"></div>
          <p>空调</p>
        </div>
      </div>
      <div class="place-detail--cont-cells">
        <dx-cell-item>
          <template slot="left">
            <p class="detail-desc-text">场所地址</p>
            <p class="place-detail--cont-desc">江苏省南京市近郊栖霞区文苑路</p>
          </template>
        </dx-cell-item>      
        <dx-cell-item>
          <template slot="left">
            <p class="place-detail--cont-desc">可容纳12人</p>
          </template>
        </dx-cell-item>
      </div>
      <!-- 评价内容 -->
      <div class="place-detail--cont-comm">
        <div class="place-detail--cont-comment">
          <p class="place-detail--cont-comment-text">场地评价</p>
          <p class="place-detail--cont-comment-amount">99+</p>
          <dx-star :rating=3 type="small"></dx-star>
        </div>
        <div>
          <dx-comment></dx-comment>
          <dx-comment></dx-comment>
        </div>
      </div>
    </div>
    <!-- footer -->
    <price-footer 
        to="/place/book" 
        price="￥60" 
        priceSmall="/小时" 
        priceInfo="评分9.6" 
        btnText="确定"
      >
    </price-footer>   
  </div>
</template>
<script>
  import PriceFooter from 'pages/common/PriceFooter.vue'
  export default {
		components: {
			PriceFooter
		},
    mounted() {
    },
    methods: {
    },
    computed: {
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
.place-detail{
  &--header-bg{
    height: 4.14rem;
    background: #BAB7B1;
    background: $--place-room-pic;
    background-size: 100% 100%;    
    // width: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
  }
  &--cont{
    padding: 0.34rem 0.4rem;
    // padding-bottom: 1.2rem;
    &--icons{
      padding: 0.56rem 0.1rem 0.73rem;
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