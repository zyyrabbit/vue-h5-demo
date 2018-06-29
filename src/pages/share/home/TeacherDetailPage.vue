<template>
    <div class="home-teacher-detail" v-footer>
    	<dx-header></dx-header>
   		<dx-item class="home-teacher-detail__teacher">
   			<div 
   				slot="left"
   				class="home-teacher-detail__teacher--des" 
   			>
   				<div>老师：{{teacher.name}}</div>
   				<div>{{teacher.persionalSignature}}</div>
   			</div>
   			<div 
   				slot="right"
   				class="home-teacher-detail__teacher--icon"
					:style="{backgroundImage: 'url(' + teacher.persionalImage + ')'}"
   			></div>
   		</dx-item>
   		<p class="home-teacher-detail--text">
   			{{teacher.persionalIntroduction}}
   		</p>
		<div class="home-teacher-detail__courses">
			<p class="home-teacher-detail__courses--title">他的{{teacherCourses.length}}门课程</p>
			<dx-ul>
				<li  
				  v-for="course in teacherCourses"
					class="home-teacher-detail__courses--item">
					<div class="home-teacher-detail__courses--item-pic"
						:style="{backgroundImage: 'url(' + course.courseImage + ')'}"></div>
					<div class="home-teacher-detail__courses--item-desc">
						</p>{{course.courseRecommend}}</p>
						<div class="home-teacher-detail__courses--item-message clearfix">
							<div class="home-teacher-detail__courses--item-message-left">
								<span :style="{backgroundImage: 'url(' + teacher.persionalImage + ')'}"></span>
								<span>{{teacher.name}}</span>
							</div>
							<span>
								<span>{{course.enteredCount}}</span> 人参加过
							</span>
						</div>
					</div>
				</li>
			</dx-ul>
		</div>
		<button-footer btnText="联系老师"></button-footer>
   	</div>
</template>
<script>
	import capi from 'api/courseApi.js'
	import uapi from 'api/userApi.js'
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader,
			ButtonFooter
		},
		data() {
			return {
				teacher: {},
				teacherCourses: [],
				teacherId: this.$route.params.id
			}
		},
		mounted() {
			this.getTeacherInfo()
			this.getTeacherCourse()
		},
		methods: {
			getTeacherInfo() {
				uapi.getUserInfo({id: this.teacherId}).then(r => {
					this.teacher = r.data
				})
			},
			getTeacherCourse() {
				capi.getCourseByUser({id: this.teacherId}).then(r => {
					this.teacherCourses = r.data
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-teacher-detail) {
		font-size: 0.34rem;
		padding: 0.31rem 0.4rem 0;
		// 老师介绍
		@include e(teacher) {
			@include m(des) {
				font-size: 0.34rem;
				>div {
					margin-bottom: 0.13rem;
				}
				div:nth-child(2) {
					color: #FF9CC8;
				}
			}

			@include m(icon) {
				width: 1.44rem;
				height: 1.44rem;
				border-radius: 50%;
				// background: url('../../../assets/images/index/home/teacher1.png');
				background-size: 100% 100%;
			}
		}
		@include m(text) {
			padding-top: 0.3rem;
			padding-bottom: 0.59rem;
			border-bottom: 0.02rem solid #EBEBEB;
		}
		/* 具体课程 */
		@include e(courses) {
			width: 100%;
			margin-top: 0.42rem;
			@include m(title) {
				font-size: 0.42rem;
				color: #484848;
				margin-bottom: 0.37rem;
			}
			.dx-ul{
				align-items: flex-start;
			}
			@include m(item) {
				width: 3.26rem;
				margin-bottom: 0.4rem;
			}
			@include m(item-pic) {
				width: 3.26rem;
				height: 2.66rem;
				background-size: 100% 100%;
				border-radius: 0.1rem;
			}	
			@include m(item-desc) {
				margin-top: 0.29rem;
				font-size: 0.26rem;
			}

			@include m(item-message) {
				margin-top: 0.24rem;
				text-align: right;
				color: #57B8D7;
				font-size: 0.22rem;
				>span {
					vertical-align: middle;
				}
			}

			@include m(item-message-left) {
				float: left;
				color: #484848;
				font-size: 0.22rem;
				>span {
					vertical-align: middle;
				}
				&>span:nth-child(1) {
					display: inline-block;
					width: 0.32rem;
					height: 0.32rem;
					margin-right: 0.11rem;
					background-size: 100% 100%;
					border-radius: 50%;
				}

			}	
			@include m(item-message-right) {
				float: right;
				color: #57B8D7;
				font-size: 0.22rem;
			}
		}
		
	}

</style>