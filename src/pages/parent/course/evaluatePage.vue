<template>
  <div class="course-evaluate">
    <div>
      <p class="headline-upper-text">共189人评价 · 9.5分</p>
    </div>
    <div class="course-evaluate-btn-group">
      <dx-button type="primary" size="small">老师好</dx-button>
      <dx-button type="primary" size="small">知识实用</dx-button>
      <dx-button type="primary" size="small">教学效果好</dx-button>
    </div>
    <div>
      <dx-comment></dx-comment>
      <dx-comment></dx-comment>
      <dx-comment></dx-comment>
      <dx-comment></dx-comment>
      <dx-comment></dx-comment>
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
.course-evaluate{
  padding: 0.3rem 0.4rem;
  &-title{
    font-size: 0.28rem;
    color: $--common-text-font-color;
  }
  &-btn-group{
    padding: 0.3rem 0;
    line-height: 0;
    // 行内元素默认间隙问题
    font-size: 0;
    button + button {
      margin-left: 0.2rem;
    }
  }  
}
</style>