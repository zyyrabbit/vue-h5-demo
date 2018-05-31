<template>
  <div class="place-book">
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
  import ButtonFooter from 'pages/common/ButtonFooter.vue'
  export default {
		components: {
			ButtonFooter
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
</style>