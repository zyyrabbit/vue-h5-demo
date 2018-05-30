<template>
  <div class="place-detail">
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
      <div>
      </div>
    </div>
    <!-- footer -->
    <div class="place-footer">
      <div class="place-footer-price">
        <p class="price-text">¥60<span class="price-text-small">/小时</span></p>
        <p class="btn-text">评分9.6</p>
      </div>
      <div class="place-footer-btn">
        <dx-button size="full" type="pinking">确定</dx-button>
      </div>
    </div>    
  </div>
</template>
<script>
  export default {
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
.place-footer{
  position: fixed;
  padding: 0.2rem 0.4rem;
  bottom: 0;
  display: flex;
  width:100%;
  z-index: 99;
  background:rgba(255,255,255,1);
  box-shadow:0 -0.02rem 0.06rem 0.06rem rgba(0,0,0,0.06);
  align-items:center;
  &-btn{
    width:3rem;
    font-size:0;
  }
  &-price{
    flex-grow: 1;
  }
  .price-text-small{
    font-size:$--common-button-text-font-size;
  }
}
.place-detail{
  &--header-bg{
    height: 4.14rem;
    background: #BAB7B1;
    // width: 100%;
    // position: absolute;
    // top: 0;
    // left: 0;
  }
  &--cont{
    padding: 0.34rem 0.4rem;
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
    &-cells{
      &:first-child {
        &:before {
          display: none;
        }
      }      
    }
  }
}
</style>