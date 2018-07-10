<template>
  <div class="place-relate">
    <dx-header></dx-header>
    <p class="headline-upper-text">关联您的课程</p>
    <div class="place-relate-list">
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程名称</p>
          <div class="place-relate-detl">
            <p>孩子听得懂的英语</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">开课时间</p>
          <div class="place-relate-detl">
            <p>4月6号 13:00~15:00</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程价格</p>
          <div class="place-relate-detl">
            <p>￥60/学院</p>
          </div>
        </template>
      </dx-cell-item>
    </div>
    <button-footer to="/place" btnText="确定">
    </button-footer>    
  </div>
</template>
<script>
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonFooter from 'pages/common/ButtonFooter.vue'
  export default {
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
        // 场地预订id
        reserveId: this.$route.params.reserveId
      }
    }
  }
</script>
<style scoped lang="scss">
.place-relate{
  padding: 0.3rem 0.4rem;
  &-title{
    font-size: 0.28rem;
    color: $--common-text-font-color;
  }
  &-detl{
    margin-top: 0.2rem;
    font-size: $--common-subtitle-font-size;
    color: $--common-selectd-text-font-color;    
  }
}
</style>