<template>
  <div class="button-footer">
    <div class="button-footer-btn">
      <dx-button size="full" type="primary" @dx-button-click="goTo()">
        {{btnText}}
      </dx-button>
    </div>
  </div>
</template>
<script>
	export default {
    props: {
      to: String,
      btnText: String,
      price: String,
      priceSmall: String,
      priceInfo: String
    },
    methods: {
      goTo() {
        console.info(this.to)
        if (this.to) {
          this.$router.push(this.to)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.button-footer{
  position: fixed;
  padding: 0.31rem 0.5rem;
  left: 0;
  bottom: 0;
  display: flex;
  width:100%;
  z-index: 99;
  background:rgba(255,255,255,1);
  box-shadow:0 -0.02rem 0.06rem 0.06rem rgba(0,0,0,0.06);
  align-items:center;
  &-btn{
    width: 100%;
    font-size:0;
  }
}
</style>
