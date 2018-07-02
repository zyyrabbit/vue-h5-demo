<template>
  <div class="place-select">
    <div class="place-select--title">
      <p class="headline-upper-text">选择地区</p>
      <p class="headline-desc-text">目前只开放以下城市</p>
    </div>
    <div class="place-select--btn-group">
      <dx-button size="small" 
        v-for="item in regionList"
        :type="item.rId === selecting ? 'primary' : 'gray'"
        @dx-button-click="handleClick(item)"
        key="item.id">{{item.fieldRegion}}
      </dx-button>
    </div>
    <div class="place-select--btn-ok">
      <dx-button size="max" type="primary" @dx-button-click="submitRegion()">确定</dx-button>
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
        regionList: state => state.regionList,
        selecting: state => state.selectingRegion,
        regionId: state => state.selectRegion
      })
    },
    methods: {
			...mapMutations([
        'SET_REGIONLIST',
        'SELECTING_REGION',
        'SET_SELECTREGION'
			]),
      handleClick(obj) {
        this.SELECTING_REGION(obj.rId)
        this.id = obj.rId
      },
      submitRegion() {
        if (this.id) {
          this.SET_SELECTREGION(this.id)
        }
        this.$router.push('/place')
      },
      getRegionList() {
        pApi.getRegionList().then(r => {
          this.SET_REGIONLIST(r.data.list)
				})
      }
    },
    data() {
      return {
        id: null
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