<template>
  <div class="opendate-place">
    <dx-header is-close></dx-header>
    <div class="opendate-place--content">
      <div class="opendate-place--list">
        <dx-tabs v-model="tabValue" :tabs="tabs" @input="tabClick()"></dx-tabs>
        <ul class="opendate-place__content">
          <li 
            v-for="(item,index) in openDateList" 
            :key="item.oId"
            :class="{'is-disabled': item.reserveId !== null}"
            class="opendate-place__content-item"
          >
            <div class="opendate-place__content-item--desc">
              <p>{{item.openTime}}</p>
            </div>
            <dx-radio 
              v-model="select"
              :label="item.oId"
              :disabled="item.reserveId !== null"
              no-label
              class="opendate-place__content-item--radio"
            >
              <span 
                slot="radio-icon" 
                class="opendate-place__content-item--radio-icon"
              ></span>
            </dx-radio>
          </li>
          <li v-if="!openDateList || openDateList.length === 0" 
          class="opendate-place__content-item">
            <p>本日无场地开放</p>
          </li>
        </ul>
      </div>
    </div>
    <button-footer @button-footer-click="selectOpenDate()" btnText="下一步"></button-footer> 
  </div>
</template>
<script>
  import Bus from 'utils/bus.js'
  import {mapState, mapMutations} from 'vuex'
  import papi from 'api/placeApi.js'
  import mixin from 'utils/mixin.js'
  import dayjs from 'dayjs'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	import DxHeader from 'pages/common/HeaderPage.vue'
  export default {
    mixins: [mixin],
		components: {
			DxHeader, ButtonFooter
    },
		computed: {
			...mapState({
        selectedDate: state => state.selectPlaceDate,
        openDateId: state => state.openDateId
      }),
      tabValue: {
        get: function() {
          return this.selectedDate
        },
        set: function(val) {
          this.SET_SELECT_PLACE_DATE(val)
        }
      },
      select: {
        get: function() {
          return this.openDateId
        },
        set: function(val) {
          this.SET_OPENDATE_ID(val)
        }
      }
    },
    mounted() {
      this.getFieldList()
    },
    methods: {
			...mapMutations([
        'SET_SELECT_PLACE_DATE',
        'SET_OPENDATE_ID'
			]),
      getFieldList() {
        let date = null
        if (this.selectedDate) {
          date = this.selectedDate
        } else {
          date = dayjs().format('YYYY-MM-DD')
        }
				papi.getFieldOpenList({id: this.id, openDate: date}).then(r => {
          console.info(r.data)
          this.openDateList = r.data.openDateList
				})
      },
      tabClick() {
        this.getFieldList()
      },
      contributeDates() {
        // 今天开始往后七天
        this.tabs = []
        for (var i = 0; i < 7; i++) {
          let obj = {
            label: dayjs().add(i, 'day').format('MM-DD ddd'),
            value: dayjs().add(i, 'day').format('YYYY-MM-DD')
          }
          i === 0 ? obj.label = '今天' : obj.label = obj.label
          i === 1 ? obj.label = '明天' : obj.label = obj.label
          this.tabs.push(obj)
        }
      },
      selectOpenDate() {
        this.SET_OPENDATE_ID(this.select)
        Bus.$emit('opendate.select', this)
        this.$router.go(-1)
      }
    },
    created() {
      this.contributeDates()
    },
    data() {
      return {
        id: this.$route.params.id,
        tabs: [],
        // select: this.openDateId,
        disabled: 3,
        openDateList: []
      }
    }
  }
</script>
<style scoped lang="scss">
  @include b(opendate-place) {
    padding: 0.4rem 0.4rem 0;
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
</style>