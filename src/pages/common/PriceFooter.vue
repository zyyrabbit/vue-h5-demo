<template>
  <div class="place-footer">
    <div class="place-footer-price">
      <p class="price-text">
        {{price}}
        <span class="price-text-small">
          {{priceSmall}}
        </span>
      </p>
      <p class="btn-text">
        {{priceInfo}}
      </p>
    </div>
    <div class="place-footer-btn">
      <dx-button :disabled="btnDisabled" size="full" type="pinking" @dx-button-click="goTo()">
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
      btnDisabled: Boolean,
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
.place-footer{
  position: fixed;
  padding: 0.31rem 0.4rem;
  left: 0;
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
</style>
