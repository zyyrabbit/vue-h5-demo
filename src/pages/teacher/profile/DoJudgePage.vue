
<template>
   <div class="teacher-do-judge">
	   <dx-header is-close></dx-header>
	   <div class="teacher-do-judge--title" @click="log()">给学员打分</div>
       <dx-rate 
         v-model="rate"
         :rateClass="iconClass"
         :selectRateClass="selectIconClass"
       ></dx-rate>
	  <!--  <p class="profile-account-advise--content-test">
	   	我们一直致力于改进一起趣学的用户体验,所以很希望知道哪些是我们现在做的令您满意的,而哪些是做的还不够好的,我们希望听到您的建议。
	  </p> -->
	   <div class="teacher-do-judge--textarea">
	   		<textarea 
	   			name="teacher-do-judge-texarea"
	   			v-model="adviseContent"
	   			@focus="onFocus()"
	   			@blur="onBlur()"
	   		></textarea>
	   </div>
	   <button-footer to="" btnText="提交评价"></button-footer>
   </div>
</template>
<script>
		import DxHeader from '../../common/HeaderPage.vue'
		import ButtonFooter from 'pages/common/ButtonFooter.vue'
    export default {
        components: {
           DxHeader, ButtonFooter
        },
        data() {
			return {
				rate: 0,
				iconClass: 'teacher-do-judge--rate-icon',
				selectIconClass: 'teacher-do-judge--rate-icon-select',
				adviseContent: '从这里开始输入您的建议(300字以内)'
			}
		},
		methods: {
			onFocus() {
				this.adviseContent = ''
			},
			onBlur() {
				if (this.adviseContent === '') {
					this.adviseContent = '从这里开始输入您的建议(300字以内)'
				}
			},
			log() {
				console.log(this.rate)
			}
		}
   }
</script>
<style  lang="scss">
    @include b(teacher-do-judge) {
      	padding: 0.33rem 0.37rem 0;
      	color: #484848;
      	font-size: 0.3rem;
      	@include m(title) {
         	text-align: left;
         	font-size: 0.6rem;
         	margin-top: 0.27rem;
         	margin-bottom: 0.77rem;
      	}
     	@include m(rate-icon) {
          	background: $--judge-icon-gray-background;
      	}
      	@include m(rate-icon-select) {
         	background: $--judge-icon-red-background;
     	}
      	@include m(content-test) {
			margin-top: 0.4rem;
			margin-bottom: 0.57rem; 
			line-height: 0.6rem;
      	}
      	@include m(textarea) {
      		margin-top: 0.26rem;
			>textarea {
				font-family: inherit;
				font-size: 0.3rem;
				width: 100%;
				height: 3.96rem;
				padding: 0.1rem;
				border-radius: 0.2rem;
				background: rgba(248,248,248,1);
				border: none;
				padding: 0.28rem;
			}			
  	  }
   }  
</style>