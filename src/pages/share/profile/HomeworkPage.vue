
<template>
   <div class="profile-account-advise">
	   <dx-header is-close></dx-header>
	   <div class="profile-account-advise--title">{{isTeacher ? '布置作业': '提交作业'}}</div>
	   <p class="profile-account-advise--content-test">
			 {{isTeacher ? '请布置此课时的作业': `作业题目:${work.question}`}}
	   </p>
	   <div class="profile-account-advise--textarea">
	   		<textarea 
	   			name="profile-account-advise-texarea"
	   			v-model="adviseContent"
	   			@focus="onFocus()"
	   			@blur="onBlur()"
	   		></textarea>
	   </div>
	   <button-footer @button-footer-click="submitAdvise()" :btnText="isTeacher ? '布置作业': '提交作业'"></button-footer>
   </div>
</template>
<script>
	import papi from 'api/periodApi.js'
	import DxHeader from '../../common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	export default {
		components: {
			DxHeader, ButtonFooter
		},
		data() {
			return {
				adviseContent: '输入内容...',
				isTeacher: this.$route.meta === 'teacher',
				periodId: this.$route.params.id,
				work: {},
				ans: {}
			}
		},
		mounted() {
			console.info(this.isTeacher)
			// 先查有没有已布置作业
			papi.getAssignedHomework(this.periodId).then(r => {
				if (r.data) {
					this.work = r.data
					if (this.isTeacher) {
						this.adviseContent = this.work.question
					} else {
						// 先查有没有已完成作业
						papi.getDoHomework(this.periodId).then(r => {
							if (r.data) {
								this.ans = r.data
								this.adviseContent = this.ans.result
							}
						})
					}
				}
			})
		},
		methods: {
			onFocus() {
			},
			onBlur() {
			},
			submitAdvise() {
				if (!this.adviseContent || !this.adviseContent.trim()) {
					alert('请输入内容')
					return
				}
				if (this.isTeacher && this.work.id) {
					// 教师 已有作业id
					papi.updateHomework({question: this.adviseContent, id: this.work.id}).then(r => {
						alert('提交成功!')
						this.$router.go(-1)
					})
				} else if (this.isTeacher && !this.work.id) {
					// 教师 无作业id
					papi.assignHomework({question: this.adviseContent, periodId: this.periodId}).then(r => {
						alert('提交成功!')
						this.$router.go(-1)
					})
				}
				if (!this.isTeacher && this.ans.id) {
					// 学员 已有作业id
					papi.doHomeworkUpdate({result: this.adviseContent, id: this.work.id}).then(r => {
						alert('提交成功!')
						this.$router.go(-1)
					})
				} else if (!this.isTeacher && !this.ans.id) {
					// 学员 无作业id
					papi.doHomework({
						result: this.adviseContent,
						periodId: this.periodId,
						questionId: this.work.id
					}).then(r => {
						alert('提交成功!')
						this.$router.go(-1)
					})
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
         font-size: 0.48rem;
        //  margin-top: 0.64rem;
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