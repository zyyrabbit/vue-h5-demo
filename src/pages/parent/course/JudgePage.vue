<template>
   <div>
      <div class="index-judging">
         <dx-header is-close></dx-header>
         <div class="index-judging__label">
            <p>撰写评价</p>
            <dx-checkbox-group
              v-model="str"
              class="index-judging__label--group clearfix"
            >
              <dx-checkbox 
                v-for="(dict, index) in judgeDicts"
                :key="dict.id"
                :label="dict.name"
                :value="dict.id"
                name="index-judging-checkbox"
                class="index-judging__label--group--item block--float-left"
              ></dx-checkbox>
            </dx-checkbox-group>
         </div>
         <div>
            <div class="index-judging__content">
              <p>评价教学质量</p>
              <div>
                <dx-rate
                  v-model="periodGrade"
                  :rateClass="iconClass"
                  :selectRateClass="selectIconClass"
                ></dx-rate>
              </div>
              <textarea :class="inputClass" rows="3"
                v-model="periodContent"
                placeholder="写几句对课程的评价吧..."></textarea>
            </div>

            <div class="index-judging__content">
               <p>评价场地环境</p>
               <div>
                  <dx-rate 
                     v-model="placeGrade"
                     :rateClass="iconClass"
                     :selectRateClass="selectIconClass"
                  ></dx-rate>
               </div>
               <div>
                <textarea :class="inputClass" rows="3"
                  v-model="placeContent"
                  placeholder="写几句对场地环境的评价吧..."></textarea>
               </div>
            </div>
         </div>
      </div>
      <div class="index-judging__submit-btn">
        <dx-button size="max" type="primary" @dx-button-click="submitEvalution()">提交评价</dx-button>
      </div>
   </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import capi from 'api/courseApi.js'
  import DxHeader from 'pages/common/HeaderPage.vue'
  export default {
    components: {
      DxHeader
    },
		computed: {
			...mapState({
        judgeDicts: state => state.judgeDicts
      })
    },
    data() {
      return {
        labels: ['老师好', '知识实用', '教学效果好', '能及时纠正', '场地环境好', '很好'],
        // periodId: this.$route.param.id,
        str: [],
        periodGrade: 2,
        placeGrade: 0,
        iconClass: 'index-judging__content--rate-icon',
        selectIconClass: 'index-judging__content--rate-icon-select',
        periodContent: '',
        placeContent: '',
        inputClass: 'index-judging__content--environment'
      }
    },
    mounted() {
      this.getDicts()
    },
    methods: {
			...mapMutations([
        'SET_JUDGEDICTS'
			]),
      getDicts() {
				capi.getJudgeDict().then(r => {
					this.SET_JUDGEDICTS(r.data)
				})
      },
      submitEvalution() {
        let param = {
          str: this.str,
          periodId: this.periodId,
          periodGrade: this.periodGrade * 2,
          periodContent: this.periodContent,
          placeGrade: this.placeGrade * 2,
          placeContent: this.periodContent
        }
				capi.submitJudge(param).then(r => {
          alert('提交成功!')
          this.$route.go(-1)
				})
      }
    }
  }
</script>
<style lang="scss">
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #b3b3b3;
}
   @include b(index-judging) {
      padding: 0.31rem 0.4rem 0;
      color: #484848;
      font-size: 0.36rem;
      @include m(back) {
         margin-bottom: 0.3rem;
      }
      @include e(label) {
         font-size: 0.24rem;
         color: #57B8D7;
         border-bottom: 0.02rem solid #EBEBEB;
         >p {
            font-size: 0.6rem;
            font-weight: bold;
            color: #484848;
         }
         @include m(group) {
            margin-top: 0.32rem;
            >label {
               margin-right: 0.16rem;
               margin-bottom: 0.42rem;
            }
         }
      }
      @include e(content) {
         padding: {
            top: 0.44rem;
            bottom: 0.56rem;
         }
         border-bottom: 2px solid #EBEBEB;
         >p:nth-child(1) {
            font-size: 0.42rem;
            font-weight: bold;
            line-height: 0.42rem;
         }
         >div:nth-child(2) {
            margin: {
               top: 0.07rem;
               bottom: 0.07rem;
            }
         }
         >p:nth-child(3) {
            font-size: 0.34rem;
            line-height: 0.44rem;
         }
         @include m(rate-icon) {
            background: $--judge-icon-gray-background;
         }
         @include m(rate-icon-select) {
            background: $--judge-icon-red-background;
         }

         @include m(environment) {
          padding: 0 !important;
          border: none !important;
          font-size: 0.36rem;   
          width: 100%;      
         }
         // 最后一个元素border: none
         &:last-child {
            border: none;
         }
      }

      @include e(submit-btn) {
         width: 100%;
         height: 1.62rem;
         @include center;
         box-shadow: 0 -0.1rem 0.09rem RGBA(0, 0, 0, 0.06);
      }
   }  
</style>