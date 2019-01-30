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
              value-key="id"
              label-key="fieldName"
              placeholder="请选择场地">
            </dx-select>
            <p v-else-if="!placeNotUseList">无可使用场地</p>
            <p v-else>-</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">场地地址</p>
          <div class="place-relate-detl">
            <p v-if="placeNotUseList && reserveId">{{place.fieldAddress}}</p>
            <p v-else-if="!placeNotUseList">无可使用场地</p>
            <p v-else>-</p>
          </div>
        </template>
      </dx-cell-item>
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">开课时间</p>
          <div class="place-relate-detl">
            <p v-for="item in openDateDisplayList" @click="selectOpen=true">{{item}}</p>
            <div v-if="!openDateDisplayList || openDateDisplayList.length === 0">
              <p v-if="!placeOpenList">请先选择场地</p>
              <p v-else @click="selectOpen=true">请选择开课时间</p>
            </div>
          </div>
        </template>
      </dx-cell-item>        
      <dx-cell-item>
        <template slot="left">
          <p class="place-relate-title">课程价格</p>
          <dx-input
            v-model="periodMoney"
            :inputStyle = "inputStyle"
            placeholder="请输入价格(每堂课每学员)">
          </dx-input>
        </template>
      </dx-cell-item>
    </div>
    <button-footer 
      :btn-disabled="!placeNotUseList"
      @button-footer-click="submitRelate()"
      :btnText="(!placeNotUseList) ? '暂无场地可关联课程,请先预订场地' : '确定关联'">
    </button-footer> 
    <div class="opendate-place" v-if="selectOpen">
      <div class="opendate-place--content">
      <div class="opendate-place--list">
        <ul class="opendate-place__content">
          <li 
            v-for="(item,index) in placeOpenList" 
            :key="item.index"
            class="opendate-place__content-item"
          >
            <div class="opendate-place__content-item--desc">
              <p>{{formatDateTime(item)}}</p>
            </div>
            <dx-radio-group 
              :checked="isChecked(item.id)"
              :label="item.id"
              :extra="formatDateTime(item)"
              @radio-input="handleSelect"
              no-label
              class="opendate-place__content-item--radio"
            >
              <span 
                slot="radio-icon" 
                class="opendate-place__content-item--radio-icon"
              ></span>
            </dx-radio-group>
          </li>
        </ul>
      </div>
      <button-footer @button-footer-click="selectOpen=false" btnText="选好了"></button-footer> 
      </div>
    </div>   
  </div>
</template>
<script>
  import dayjs from 'dayjs'
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
        papi.getReservedField().then(r => {
          this.placeNotUseList = r.data
          if (!r.data || r.data.length === 0) {
            this.placeNotUseList = null
          }
				})
      },
      submitRelate() {
        if (!this.reserveId) {
          alert('请选择预订好的场地进行关联')
          return
        }
        if (!this.periodMoney) {
          alert('请填写价格信息')
          return
        }
        if (+this.openDateIds === 0) {
          alert('选择开课时间')
          return
        }
        let param = {
          courseId: this.courseId,
          periodMoney: this.periodMoney,
          fieldId: this.reserveId,
          ids: this.openDateIds
        }
        papi.savePeriod(param).then(r => {
          alert('关联成功')
          this.$router.go(-1)
				}).catch(() => {
          alert('关联失败,请稍候再试')
        })
      },
      isChecked: function(val) {
        return this.openDateIds.indexOf(val) > -1
      },
      formatDateTime(item) {
        return `${dayjs(item.reserveDate).format('YYYY-MM-DD')} ${item.reserveTime}`
      },
      handleSelect(obj) {
        if (obj.selected) {
          this.openDateIds.push(obj.value)
          this.openDateDisplayList.push(obj.extra)
        } else {
          this.openDateIds.splice(this.openDateIds.findIndex(item => item === obj.value), 1)
          this.openDateDisplayList.splice(this.openDateDisplayList.findIndex(item => item === obj.extra), 1)
        }
      }
    },
    watch: {
      reserveId: function(newId) {
        papi.getReservedFieldTime(newId).then(r => {
          this.placeOpenList = r.data
          console.info(this.placeOpenList)
				})
      }
    },
    computed: {
      place() {
        let _p = {}
        if (this.placeNotUseList && this.placeNotUseList.length !== 0) {
          this.placeNotUseList.forEach(p => {
            if (p.id === this.reserveId) {
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
        placeNotUseList: null,
        placeOpenList: null,
        openDateIds: [],
        openDateDisplayList: [],
        selectOpen: false,
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
@include b(opendate-place) {
  padding: 0 0.4rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  height: 100%;
  overflow: scroll;
  @include e(content) {
    margin-top: 0.11rem;
  }
  @include e(content-item) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
    font-size: 0.26rem;
    color: #484848;
    @include when(disabled) {
      color: #7E7E7E;
      opacity: 0.5;
    }
    &:not(:last-child) {
      border-bottom: 2px solid #EBEBEB;
    }
    @include m(desc) {
      >p {
        font-size: 0.34rem;
        line-height: 1;
      }
    }
    @include m(price) {
      color: #FF9CC8;
      font-size: 0.48rem;
      @include when(disabled) {
        color: #7E7E7E;
      }
    }
    @include m(price-text) {
      color: #FF9CC8;
      @include when(disabled) {
        color: #7E7E7E;
      }				
    }
    @include m(radio-icon) {
      display: inline-block;
      background: $--btn-select-nor-background;
      background-size: 100% 100%;
      width: 0.88rem;
      height: 0.88rem;
    }
    /* 角色选中的样式 */
    .is-check {
      .opendate-place__content-item--radio-icon {
        background: $--btn-select-background;
        background-size: 100% 100%;
      }
    }    
  }
}
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