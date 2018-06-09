<template>
   <div class="index-home">
		 	<div 
		 		class="index-home-search"
		 		@click="goNext('/home/search')"
		 	>
				<dx-input 
					v-model="searchContent"
					inputClass="index-home__input"
					placeholder="搜索'趣味大百科'试试"
					originType="text"
				>
					<span class="index-home__input--icon-search"></span>
				</dx-input>
		 	</div>
   		<!-- 课程 -->
   		<div class="index-home-course">
   			<div class="index-home-course__desc clearfix">
   				<span class="index-home--title block--float-left">精选课程</span>
   				<span 
   					class="index-home-course__desc--all block--float-right"
   					@click="goNext('/home/courseDetail')"
   				>查看全部</span>
   			</div>
   			<div class="index-home-course__slide">
   				<dx-ul>
   					<li 
   						v-for="course in courses"
   						class="index-home-course__slide--item"
   					>
   						{{course}}
   					</li>
   				</dx-ul>
   			</div>
   		</div>
   		<!-- 百科 -->
   		<div class="index-home-wiki">
   			<div class="index-home-wiki__title clearfix">
   				<div class="index-home-wiki__title--left block--float-left text-ellipsis">趣味科学大百科</div>
   				<div class="index-home-wiki__title--right block--float-right">
   					<dx-ul class="index-home-wiki__title--right-text">
   						<li>一八CY</li>
   						<li>3-12</li>
   						<li>自然科学</li>
   					</dx-ul>
   				</div>
   			</div>
   			<div class="index-home-wiki__desc clearfix">
   				<div class="index-home-wiki__desc--detail block--float-left">
   					“通过趣味生动、幽默诙谐的语言，	带领孩子一起探索科学领域。”
   				</div>
   				<div class="index-home-wiki__desc--price block--float-right">Y 120</div>
   			</div>
   		</div>
   		<!-- 本周新课 -->
   		<div class="index-home-course-new">
	   		<dx-ul>
   				<li 
   					v-for="course in courses"
   					class="index-home-course-new__slide-item"
   				>
   					{{course}}
   				</li>
	   		</dx-ul>
   		</div>
   		<!-- 明星榜单 -->
   		<div class="index-home-star-list">
   			<div class="index-home--title index-home-star-list--title">明星榜单</div>
	   		<dx-ul>
   				<li 
   					class="index-home-star-list__slide-item"
   				>
   					<div class="index-home-star-teacher">
   						<div class="index-home-star-teacher--icon"></div>
   						<div class="index-home-star-teacher__detail">
   							<div>
   								<span class="index-home-star-teacher__detail--name">杨帆</span>
   								<span class="index-home-star-teacher__detail--male"></span>
   								<dx-tag class="index-home-star-teacher__detail--role">老师</dx-tag>
   							</div>
   							<div class="index-home-star-teacher__detail--desc">
   								英语协会副会长，多次获得国际英语口语竞赛金奖
   							</div>
   						</div>
	   					<div class="index-home-star-list__slide-item--course ">他的课</div>
   					</div>
   					<div class="index-home-star-teacher">
   						<div class="index-home-star-teacher--icon"></div>
   						<div class="index-home-star-teacher__detail">
   							<div>
   								<span class="index-home-star-teacher__detail--name">杨帆</span>
   								<span class="index-home-star-teacher__detail--male"></span>
   								<dx-tag class="index-home-star-teacher__detail--role">老师</dx-tag>
   							</div>
   							<div class="index-home-star-teacher__detail--desc">
   								英语协会副会长，多次获得国际英语口语竞赛金奖
   							</div>
   						</div>
	   					<div 
	   						class="index-home-star-list__slide-item--course"
	   						@click="goNext('/home/teacherDetail')"
	   					>他的课</div>
   					</div>
   				</li>
	   		</dx-ul>
   		</div>
   		<!-- 即将上课 -->
   		<div class="index-home-course-going">
   			<div class="index-home--title">即将上课</div>
   			<div class="index-home-course-going__slide">
		   		<dx-ul>
	   				<li class="index-home-course-going__slide-item">
	   					<div class="index-home-course-going__slide-item--pic"></div>
	   					<div class="index-home-course-going__slide-item--desc">
	   						<p>小学6年纪升中特训班一...</p>
	   						<p>下一堂：4月5日 09:00~10:00</p>
	   						<p>一起趣学提醒您：记得准时参加哦~</p>
	   					</div>
	   				</li>
		   		</dx-ul>
	   		</div>
   		</div>
   		<!-- 课程推荐 -->
   		<div class="index-home-course-recommend">
   			<div class="index-home-course__desc clearfix">
   				<span class="index-home--title block--float-left">课程推荐</span>
   				<span 
   					class="index-home-course__desc--all block--float-right"
   					@click="goNext('/home/contDetail')"
   				>查看全部</span>
   			</div>
   			<div class="index-home-course-recommend__slide">
   				<dx-ul>
   					<li  
   					    v-for="index in 2"
   						class="index-home-course-recommend__slide--item">
   						<div class="index-home-course-recommend__slide--item-pic"></div>
   						<div class="index-home-course-recommend__slide--item-desc">
   							</p>
   								古诗词朗诵,让孩子在国学的熏陶中成长
   							</p>
   							<div class="index-home-course-recommend__slide--item-message clearfix">
   								<div class="index-home-course-recommend__slide--item-message-left">
   									<span></span>
   									<span>阿杜</span>
   								</div>
   								<span>
   									<span>1145</span> 人参见过
   								</span>
   							</div>
   						</div>
   					</li>
   				</dx-ul>
   			</div>
   		</div>
		<dx-footer :selectTab="0"></dx-footer>
		<transition
			name="router"  
			mode='out-in'
		>
			<router-view class="full-screen"/>
		</transition>
   </div>
</template>
<script>
	import DxFooter from '../common/FooterPage.vue'
	import mixin from 'utils/mixin.js'
	export default {
		mixins: [mixin],
		components: {
			DxFooter
		},
		data() {
			return {
				searchContent: '',
				courses: ['1', '2', '3']
			}
		}
	}
</script>
<style lang="scss">
	@include b(index-home) {
		// 修复inline-block占高问题
		.dx-input-label-text{
			display: block;
		}
		& .index-home__input {
			// 修复inline-block占高问题
			display: block;
			border-bottom: none ;
			padding: 0.2rem 0 0.2rem 0.87rem;
			background-color: #F3F3F3;
			border-radius: 0.2rem;
			line-height: .36rem;
			font-size: .3rem;	
			@include m(icon-search) {
				padding: 0.36rem 0;
				display: inline-block;
				margin-left: 0.32rem;
				width: 0.32rem;
				height: 0.32rem;
				background: $--index-home-background;
				vertical-align: middle;
			}
		}
	}
</style>
<style scoped lang="scss">
	@include b(index-home) {
		@include m(title) {
			font-size: 0.46rem;
			color: #484848;
		}
		@include b(index-home-search) {
			-webkit-user-select:text!important;
			padding-top: 0.15rem;
		}
		/* 课程 */
		@include b(index-home-course) {
			margin-top: 0.5rem;
			@include e(desc) {
				line-height: 0.44rem;
				@include m(all) {
					font-size: 0.3rem;
					color: #57B8D7;
				}
			}
			/* 课程左右滑动窗口 */
			@include e(slide) {
				height: 3.7rem;
				margin-top: 0.36rem;
				overflow: hidden;
				@include m(item) {
					border-radius: 0.14rem;
					width: 100%;
					height: 3.7rem;
					background: red;
				}
			}
		}

		/* 百科 */
		@include b(index-home-wiki) {
			margin-top: 0.3rem;
			@include e(title) {
				line-height: 0.36rem;
				@include m(left) {
					max-width: 2.6rem;
					font-size: 0.36rem;
					color: #333333;
				}
				@include m(right) {
					font-size: 0.24rem;
				}
				@include m(right-text) {
					>li{
						&:first-child {
							&:before {
								display: none;
							}
						}	
						&:before {
							content: "|";
							padding:0 0.2rem;
							color: #e5e5e5;
							z-index: 2;
						}
					}									
				}
			}

			@include e(desc) {
				margin-top: 0.35rem;
				height: 0.9rem;
				@include m(detail) {
					width: 3.22rem;
					font-size: 0.22rem;
					color: #7e7e7e;
				}
				@include m(price) {
					width: 1.82rem;
					height: 0.9rem;
					font-size: 0.3rem;
					color: #fff;
					background: $--index-home-nor;
					@include center;
				}
			}
		}
		/* 本周新课程 */
		@include b(index-home-course-new) {
			margin-top: 0.97rem;
			height: 3.7rem;
			overflow: hidden;
			@include e(slide-item) {
				border-radius: 0.14rem;
				width: 100%;
				height: 3.7rem;
				background: red;
			}
		}
		/* 明星榜单 */
		@include b(index-home-star-list) {
			margin-top: 1.04rem;
			@include m(title) {
				margin-bottom: 0.43rem;
			}
			@include e(slide-item) {
				width: 100%;
				@include m(course) {
					width: 1.82rem;
					height: 1.29rem;
					/* item分组 */
					margin-left: auto;  
					font-size: 0.3rem;
					background: $--index-home-nor;
					color: rgba(255,255,255,1);
					@include center;
				}
			}
		}
		/* 明星老师介绍 */
		@include b(index-home-star-teacher) {
			display: flex;
			align-items: center;
			height: 1.29rem;
			&:nth-child(1) {
				margin-bottom: 0.42rem;
			}
			@include m(icon) {
				width: 1.29rem;
				height: 1.29rem;
				border-radius: 50%;
				background-color: #444;
			}
			@include e(detail) {
				display: inline-block;
				vertical-align: middle;
				width: 2.87rem;
				margin-left: 0.2rem;
				font-size: 0.32rem;
				@include m(male) {
					display: inline-block;
					// margin-left: 0.1rem;
					width: 0.32rem;
					height: 0.32rem;
					background: $--index-home-teacher-male-background;
					vertical-align: middle;
				}
				@include m(role) {
					margin-left: 0.1rem;
				}
				@include m(desc) {
					padding-top: 0.15rem;
					font-size: 0.24rem;
					color: #7E7E7E; 
				}
			}
		}

		/* 即将开课 */
		@include b(index-home-course-going) {
			margin-top: 1.01rem;
			@include e(slide) {
				margin-top: 0.38rem;
			}
			@include e(slide-item) {
				display: flex;
				align-items: center;
				@include m(pic) {
					width: 1.22rem;
					height: 1.6rem;
					background: #666;
				}
				@include m(desc) {
					margin-left: 0.31rem;
					max-width: 4.2rem;
					>p {
						&:nth-child(1) {
							font-size: 0.36rem;
						}
						&:nth-child(2) {
							color: #57B8D7;
							font-size: 0.28rem;
						}
						&:nth-child(3) {
							color: #7E7E7E;
							font-size: 0.22rem;
						}
					}
				}
			}
		}
		/* 课程推荐 */
		@include b(index-home-course-recommend) {
			margin-top: 0.97rem;
			width: 100%;
			overflow: hidden;
			padding-bottom: 1.6rem;
			@include e(slide) {
				width: 100%;
				margin-top: 0.42rem;
				@include m(item) {
					width: 3.26rem;
				}
				@include m(item-pic) {
					width: 3.26rem;
					height: 2.66rem;
					background: red;
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
						background: red;
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
	}
</style>