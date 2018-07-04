<template>
	<div class="home-course-judging">
		<dx-header></dx-header>
		<div class="home-course-judging__label">
			<p>共{{eval.evaluationCount}}人评价 · {{eval.residueCourse.toFixed(1)}}分</p>
			<dx-checkbox-group class="home-course-judging__label--group clearfix">
				<dx-checkbox 
					v-for="(label, index) in eval.list"
					:key="index"
					:label="label.name"
					only-display
					name="home-course-judging-checkbox"
					class="block--float-left"
				></dx-checkbox>
			</dx-checkbox-group>
		</div>
		<ul class="home-course-judging__list">
			<li class="home-course-judging--item" 
				v-for="item in evaluation"
				:key="item.id">
				<dx-comment :item="item"></dx-comment>
			</li>
		</ul>
	</div>
</template>
<script>
	import capi from 'api/courseApi.js'
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		},
		data() {
			return {
				courseId: this.$route.params.id,
				eval: {},
				evaluation: []
			}
		},
		mounted() {
			console.info(this.courseId)
			this.getCourseEval()
		},
		methods: {
			getCourseEval() {
				let param = {
					courseId: this.courseId,
					pageIndex: 1,
					pageSize: 999
				}
				capi.getCourseEvaluation(param).then(r => {
					this.eval = r.data
					this.evaluation = r.data.pageInfo.list
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-course-judging) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include e(label) {
	        font-size: 0.24rem;
	        color: #57B8D7;
	        margin-top: 0.4rem;
	        >p {
	           font-size: 0.6rem;
	           font-weight: bold;
	           color: #484848;
	        }
	        @include m(group) {
	            margin-top: 0.32rem;
	            >label {
								background: #93D5F1;
	               margin-right: 0.16rem;
	               margin-bottom: 0.42rem;
	            }
	        }
      	}
      	@include m(item) {
	        &:not(:last-child) {
	        	border-bottom: 2px solid #EBEBEB;
	        }
	    }
	}
</style>