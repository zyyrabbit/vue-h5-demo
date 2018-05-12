<template>
   <div class="index-judging">
         <div 
            class="index-judging--back"
            @click="goBack()"
         > 
         X
         </div>
         <div class="index-judging__label">
              <p>撰写评价</p>
              <ul class="clearfix">
                 <li
                     v-for="(label, index) in labels"
                     :key="index"
                     class="block--float-left"
                 >
                    <dx-checkbox :label="label"></dx-checkbox>
                 </li>
              </ul>
         </div>
         <div class="index-judging--content">
            <p>评价教学质量</p>
            <p>
               课程特别好,孩子学到了很多,特别是教室,是在南京师范大学里面,哈哈,我和孩子还是第一次南师大教室上课。还想让孩子以后报考这个大学呢,是不是想太多啦~总之是一次很开心的学习体验。
            </p>
         </div>
    </div>
</template>
<script>
   export default {
      data() {
         return {
            labels: ['老师好', '知识实用', '教学效果好', '能及时纠正', '场地环境好', '很好']
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
         margin-bottom: 0.63rem;
      }
      @include e(label) {
         margin-top: 0.63rem;
         font-size: 0.24rem;
         color: #57B8D7;
         >p {
            font-size: 0.6rem;
         }
         >ul {
            margin-top: 0.32rem;
            >li {
               margin-right: 0.16rem;
               margin-bottom: 0.42rem;
            }
         }
      }
      @include m(content) {
         line-height: 1.39rem;
         border-bottom: 2px solid #EBEBEB;
      }
   }  
</style>