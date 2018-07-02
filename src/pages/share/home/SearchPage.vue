<template>
    <div class="home-search">
    	<dx-header></dx-header>
    	<div class="home-search--input">
    		<dx-input
    			v-model="searchContent"
    			:inputStyle="inputStyle"
					placeholder="试试看搜索“英语”"
					originType="text"
    		>
    			<!-- <span class="home-search--input-left"></span> -->
    		</dx-input>
    	</div>
    	<ul class="home-search__content" v-if="!isSearchList">
    		<li 
    			v-for="course in searchList" 
    			:key="course.id"
    			class="home-search__content-item"
    		>
    			<dx-item 
    				alignItem="top"
    				to="/courseDetail"
    			>
    				<div slot="left" class="home-search__content-item--desc">
		    			<p>{{course.courseName}}</p>
		    			<p>
		    				<span class="home-search__content-item--icon"
									:style="{backgroundImage: 'url(' + course.user.persionalImage + ')'}"></span>
		    				<span>{{course.user.name}}</span>
		    				<span>{{course.user.persionalSignature}}</span>
		    			</p>
	    			</div>
		    		<div slot="right" class="home-search__content-item--number">
		    			{{course.enteredCount || 0}}人参加过
		    		</div>
    			</dx-item>
    		</li>
    	</ul>
			<ul class="index-home-course__slide--list" v-if="isSearchList">
				<li 
					v-for="course in searchList"
					:key="course.id"
					@click="goNext('/courseDetail')"
					class="index-home-course__slide--item"
				>
					<div class="index-home-course__slide--bg" 
						:style="{backgroundImage: 'url(' + course.courseImage + ')'}">
					</div>
					<!-- 百科 -->
					<div class="index-home-wiki">
						<div class="index-home-wiki__title clearfix">
							<div class="index-home-wiki__title--left block--float-left text-ellipsis">{{course.courseName}}</div>
							<div class="index-home-wiki__title--right block--float-right">
								<dx-ul class="index-home-wiki__title--right-text">
									<li class="color-blue">鲁彬</li>
									<li class="color-pink">3-12</li>
									<li class="color-orange">自然科学</li>
								</dx-ul>
							</div>
						</div>
						<div class="index-home-wiki__desc clearfix">
							<div class="index-home-wiki__desc--detail block--float-left">{{course.courseRecommend}}</div>
							<dx-button  
								class="block--float-right"
								type="pinking"
								size="small" 
               >
                ￥{{course.coursePrice}}
               </dx-button>
							<div class="index-home-wiki__desc--price block--float-right"></div>
						</div>
					</div>						
				</li>
			</ul>			
   	</div>
</template>
<script>
	import _ from 'lodash'
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
				searchContent: '',
				searchList: {},
				isSearchList: false,
				inputStyle: {
					'padding-left': '0.1rem',
					'padding-bottom': '0.38rem',
					'font-size': '0.48rem'
				}
			}
		},
		mounted() {
			this.searchCourse('')
		},
		watch: {
			searchContent: function(val) {
				this.debounceSearch(val)
			}
		},
		methods: {
			debounceSearch: _.debounce(function(val) {
				if (val) {
					this.isSearchList = true
				} else {
					this.isSearchList = false
				}
				this.searchCourse(val)
			}, 500),
			searchCourse(name) {
				capi.searchCourse({name: name}).then(r => {
					console.info(r)
					this.searchList = r.data.list
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-search) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(input) {
			margin-top: 0.67rem;
			font-size: 0.48rem;
		}
		@include m(input-left) {
			display: inline-block;
			height: 0.46rem;
			border: 0.03rem solid #369CC7;
		}
		@include e(content-item) {
			padding: 0.54rem 0;
			font-size: 0.36rem;
			color: #484848;
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc) {
				max-width: 4.33rem;
				>p {
					margin-bottom: 0.27rem;
				}
				p:last-child {
					display: flex;
					align-items: center;
					font-size: 0.22rem;
					/* 头像 */
					>span:nth-child(1) {
						display: inline-block;
						width: 0.32rem;
						height: 0.32rem;
						border-radius: 50%;
						// background-color: red;
						background-size: 100% 100%;
					}
					>span:nth-child(2) {
						margin: 0 0.12rem;
					}
				}
			}
			@include m(number) { 
				font-size: 0.3rem;
				color: #57B8D7;
			}
		}
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
			margin-top: 0.36rem;
			overflow: hidden;
			@include m(list) {
				position: relative;
				font-size: 0;
				display: flex;
				flex-direction: column;
				padding-bottom: 0.6rem;
			}
			@include m(item) {
				padding-top: 0.57rem;
				width: 100%;		
				border-radius: 0.14rem;
				color:transparent;
			}
			@include m(bg) {
				width: 100%;
				height: 3.7rem;
				// background: url('../../assets/images/index/home/wiki.png');
				background-size: 100% 100%;
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
					white-space: normal;
				}
				@include m(price) {
					width: 1.82rem;
					height: 0.9rem;
					font-size: 0.3rem;
					color: #fff;
					// background: $--index-home-nor;
					@include center;
				}
			}
		}
</style>