<template>
  <div class="place-select">
    <div class="place-select--title">
      <p class="headline-upper-text">选择地区</p>
      <p class="headline-desc-text">目前只开放以下城市</p>
    </div>
    <div class="place-select--btn-group">
      <dx-button size="small" 
        v-for="item in regionList"
        :type="item.regionId === region ? 'primary' : 'gray'"
        @dx-button-click="handleClick(item)"
        key="item.id">{{item.fieldAddress}}
      </dx-button>
    </div>
    <div class="place-select--btn-ok">
      <dx-button size="max" type="primary" @dx-button-click="goTo('/place')">确定</dx-button>
    </div>
  </div>
</template>
<script>
  import pApi from 'api/placeApi.js'
  import {mapState, mapMutations} from 'vuex'
  export default {
    mounted() {
      this.getRegionList()
    },
    computed: {
			...mapState({
				regionList: state => state.regionList
			})
    },
    methods: {
			...mapMutations([
				'SET_REGIONLIST'
			]),
      handleClick(obj) {
        this.region = obj.regionId
      },
      goTo(path) {
        this.$router.push(path)
      },
      getRegionList() {
        pApi.getRegionList().then(r => {
          this.SET_REGIONLIST(r.data.list)
				})
      }
    },
    data() {
      return {
        region: 2,
        radioGroup: []
      }
    }
  }
</script>
<style scoped lang="scss">
.place-select{
  padding: 0.31rem 0.4rem 0;
  .headline-desc-text{
    margin-top: 0.18rem;
  }
  &--btn-group{
    padding: 0.4rem 0;
    line-height: 0;
    // 行内元素默认间隙问题
    font-size: 0;
    button + button {
      margin-left: 0.2rem;
    }
  }
  &--btn-ok{
    margin-top: 0.4rem;
    font-size: 0;
  }
}
</style>