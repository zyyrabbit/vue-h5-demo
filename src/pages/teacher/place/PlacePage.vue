<template>
  <div class="index-place">
    <div class="index-place--title">
      <p>南京市仙林校区</p>
      <div class="index-place--title-icon"></div>
    </div>
    <div class="index-place--title-desc">
      <span>人气10288</span><span>累计开课278</span><span>距离你3.5km</span>
    </div>
  </div>
</template>
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
    }
  }
</style>