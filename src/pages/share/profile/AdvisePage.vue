
<template>
   <div class="profile-account-advise">
	   <dx-header is-close></dx-header>
	   <div class="profile-account-advise--title">给我们提建议</div>
	   <p class="profile-account-advise--content-test">
	    	我们一直致力于改进一起趣学的用户体验,所以很希望知道哪些是我们现在做的令您满意的,而哪些是做的还不够好的,我们希望听到您的建议。
	   </p>
	   <div class="profile-account-advise--textarea">
	   		<textarea 
	   			name="profile-account-advise-texarea"
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
			}
		}
   }
</script>
<style scoped lang="scss">
   @include b(profile-account-advise) {
      padding: 0.33rem 0.37rem 0;
      color: #484848;
      font-size: 0.3rem;
      @include m(title) {
         text-align: left;
         font-size: 0.6rem;
         margin-top: 0.64rem;
      }
      @include m(content-test) {
				margin-top: 0.4rem;
				margin-bottom: 0.57rem; 
				line-height: 0.6rem;
      }
      @include m(textarea) {
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