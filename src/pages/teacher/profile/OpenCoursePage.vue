<template>
  <div class="place-relate" v-footer>
    <dx-header is-close></dx-header>
    <p class="headline-upper-text">关联场地</p>
    <div class="place-relate-list">
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">开课场地</p>
          <div class="place-relate-detl">
            <dx-select
              v-if="placeNotUseList"
              v-model="reserveId"
              :options="placeNotUseList"
              value-key="reserveId"
              label-key="fieldName"
              placeholder="请选择场地">
            </dx-select>
            <p v-if="!placeNotUseList">无可使用场地</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">场地地址</p>
          <div class="place-relate-detl">
            <p v-if="placeNotUseList && reserveId">{{place.fieldAddress}}</p>
            <p v-else>-</p>
            <p v-if="!placeNotUseList">无可使用场地</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">场地时间</p>
          <div class="place-relate-detl">
            <p v-if="placeNotUseList && reserveId">{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
            <p v-else>-</p>
            <p v-if="!placeNotUseList">无可使用场地</p>
          </div>
        </template>
      </dx-cell-item>      
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">开课时间</p>
          <div class="place-relate-detl">
            <p v-if="placeNotUseList && reserveId">{{place.reserveDate | formatDate}} {{place.reserveTime}}</p>
            <p v-else>-</p>
            <p v-if="!placeNotUseList">无可使用场地</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程价格</p>
          <dx-input
            v-model="periodMoney"
            :inputStyle = "inputStyle"
            placeholder="请输入课程价格(每学员)">
          </dx-input>
        </template>
      </dx-cell-item>
    </div>
    <button-footer 
      :btn-disabled="!placeNotUseList"
      @button-footer-click="submitRelate()"
      :btnText="(!placeNotUseList) ? '暂无场地可关联课程,请先预订场地' : '确定'">
    </button-footer>    
  </div>
</template>
<script>
	import papi from 'api/placeApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  import ButtonFooter from 'pages/common/ButtonFooter.vue'
  export default {
		components: {
			ButtonFooter, DxHeader
		},
    mounted() {
      this.getNotUsePlace()
    },
    methods: {
      // 未使用场地
      getNotUsePlace() {
        papi.getUserField().then(r => {
          this.placeNotUseList = r.data
				})
      },
      submitRelate() {
        if (!this.courseId || !this.periodMoney || !this.reserveId) {
          alert('请完整填写')
          return
        }
        let param = {
          courseId: this.courseId,
          periodMoney: this.periodMoney,
          reserveId: this.reserveId
        }
        papi.submitRelate(param).then(r => {
          alert('关联成功')
          this.$router.go(-1)
				})
      }
    },
    computed: {
      place() {
        let _p = {}
        if (this.placeNotUseList && this.placeNotUseList.length !== 0) {
          this.placeNotUseList.forEach(p => {
            if (p.reserveId === this.reserveId) {
              _p = p
            }
          })
        }
        return _p
      }
    },
    data() {
      return {
        courseId: this.$route.params.id,
        periodMoney: '',
        reserveId: '',
        placeNotUseList: [],
        inputStyle: {
          marginTop: '0.2rem',
          padding: 0,
          border: 'none',
          color: '#57B8D7',
          fontSize: '0.36rem'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.place-relate{
  input{
    color: $--common-selectd-text-font-color;
  }
  select{
    color: $--common-selectd-text-font-color;
  }  
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