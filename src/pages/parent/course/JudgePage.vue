<template>
   <div>
      <div class="index-judging">
         <div 
            class="index-judging--back"
            @click="goBack()"
         > 
         X
         </div>
         <div class="index-judging__label">
               <p>撰写评价</p>
               <dx-checkbox-group
                  v-model="judgies"
                  class="index-judging__label--group clearfix"
               >
                  <dx-checkbox 
                     v-for="(label, index) in labels"
                     :key="index"
                     :label="label"
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
                     v-model="rate"
                     :rateClass="iconClass"
                     :selectRateClass="selectIconClass"
                  ></dx-rate>
               </div>
               <p>
                  课程特别好,孩子学到了很多,特别是教室,是在南京师范大学里面,哈哈,我和孩子还是第一次南师大教室上课。还想让孩子以后报考这个大学呢,是不是想太多啦~总之是一次很开心的学习体验。
               </p>
            </div>

            <div class="index-judging__content">
               <p>评价场地环境</p>
               <div>
                  <dx-rate 
                     v-model="rate"
                     :rateClass="iconClass"
                     :selectRateClass="selectIconClass"
                  ></dx-rate>
               </div>
               <div>
                  <dx-input 
                     v-model="environmentJudging"
                     :inputClass="inputClass"
                     placeholder="写几句对场地环境的评价吧..."
                  >
                  </dx-input>
               </div>
            </div>
         </div>
      </div>
      <div class="index-judging__submit-btn">
         <dx-button size="max" type="primary">提交评价</dx-button>
      </div>
   </div>
</template>
<script>
   export default {
      data() {
         return {
            labels: ['老师好', '知识实用', '教学效果好', '能及时纠正', '场地环境好', '很好'],
            judgies: ['老师好', '教学效果好'],
            rate: 2,
            iconClass: 'index-judging__content--rate-icon',
            selectIconClass: 'index-judging__content--rate-icon-select',
            environmentJudging: '',
            inputClass: 'index-judging__content--environment'
         }
      },
      methods: {
         goBack() {
            this.$router.go(-1);
         }
      }
   }
</script>
<style  lang="scss">
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