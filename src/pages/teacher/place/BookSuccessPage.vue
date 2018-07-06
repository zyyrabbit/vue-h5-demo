<template>
  <div class="place-book">
    <header class="index-header clearfix">
      <div class="index-header__close block--float-left" @click="goNext('/profile')"></div>
      <div style="flex-grow: 1;"></div>
    </header>
    <p class="headline-upper-text">恭喜您预定成功!</p>
    <div class="place-book-list">
      <dx-cell-item>
        <template slot="left">
          <p>预订地点</p>
          <div class="place-book-succ-detl">
            <p>南师大文渊楼305室</p>
            <p>江苏省南京市近郊栖霞区文苑路</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p>预定时间</p>
          <div class="place-book-succ-detl">
            <p>今天(4月6号)</p>
            <p>13:00~15:00</p>
          </div>
        </template>
      </dx-cell-item>
    </div>
    <button-footer to="/place/relate" btnText="关联课程">
    </button-footer>    
  </div>
</template>
<script>
	import mixin from 'utils/mixin.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonFooter from 'pages/common/ButtonFooter.vue'
  export default {
    mixins: [mixin],
		components: {
			ButtonFooter, DxHeader
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
.place-book{
  padding: 0.3rem 0.4rem;
  font-size: $--common-subtitle-font-size;
  color: $--common-text-font-color;
  &-succ-detl{
    margin-top: 0.15rem;
    font-size: 0.34rem;
  }
}
/* 头部导航栏 */
.index-header {
  display: flex;
  align-items: center;
  padding-bottom: 0.27rem;
  position: relative;
  justify-content: space-between;	
  &__close {
    width: 0.33rem;
    height: 0.33rem;
    background: $--nav-close-icon;    
    background-size: 100% 100%;
  }	
}
</style>