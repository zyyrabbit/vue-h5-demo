<template>
   <div class="search-teacher-list">
   		<dx-header is-close></dx-header>
   		<div>
   			<dx-input 
			    v-model="teacherName"
					:inputClass="inputClass"
					placeholder="试试搜索老师姓名"
	        >
   			</dx-input>
   		</div>
		<dx-ul class="search-teacher-list__item-wrap">
			<li class="search-teacher-list__item" v-for="teacher in teacherList">
				<div class="search-teacher">
					<div class="search-teacher--icon"
						:style="{backgroundImage: 'url(' + teacher.persionalImage + ')'}"></div>
					<div class="search-teacher__detail">
						<div class="search-teacher__detail--info">
							<span class="search-teacher__detail--name">{{teacher.name}}</span>
							<span class="search-teacher__detail--male" v-if="teacher.sex === '男'"></span>
							<span class="search-teacher__detail--female" v-if="teacher.sex === '女'"></span>
							<dx-tag class="search-teacher__detail--role">老师</dx-tag>
						</div>
						<div class="search-teacher__detail--desc">
							{{teacher.persionalIntroduction}}
						</div>
					</div>
					<div class="search-teacher--contact" @click="goNext('/chat/' + teacher.id)">打招呼</div>
				</div>
			</li>
		</dx-ul>
	</div>
</template>
<script>
	import _ from 'lodash'
  import uapi from 'api/userApi.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import mixin from 'utils/mixin.js'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		},
		watch: {
			teacherName: function(val) {
				this.debounceSearch(val)
			}
		},
		methods: {
			debounceSearch: _.debounce(function(val) {
				if (val) {
					this.searchTeacher(val)
				}
			}, 500),
			searchTeacher(val) {
				uapi.searchTeacher({name: val}).then(r => {
					this.teacherList = r.data
				})
			}
		},
		data() {
			return {
				teacherList: [],
				messages: [
					{
						title: '系统消息',
						time: '3天前',
						content: '请对课程进行评价',
						path: '/message/system',
						system: true
					},
					{
						title: '杨帆',
						time: '5分钟',
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/message/chat'
					},
					{
						title: '张逸勇',
						time: '5分钟',
						content: '英语协会副会长，多次获得国际英语口语竞赛金奖',
						path: '/message/chat'
					}
				],
				teacherName: '',
				inputClass: 'search-teacher-list--name'
			}
		}
	}
</script>
<style  lang="scss">
	@include b(search-teacher-list) {
		padding: 0.31rem 0.4rem 0;
		@include e(item-wrap) {
			margin-top: 0.36rem;
		}
		@include e(item) {
			width: 100%;
			border-top: 0.02rem solid #EBEBEB;
			padding: 0.57rem 0;
		}
		@include m(go-back) {
			font-size: 0.5rem;
		}
		@include m(name) {
			font-size: 0.48rem;
			color: #D3D3D3;
			padding-left: 0 !important;
			padding-bottom: 0 !important;
			border-bottom: none !important;
			// border-left: 0.03rem solid #369CC7 !important;
		}
		@include b(search-teacher) {
			display: flex;
			align-items: center;
			height: 1.29rem;
			
			@include m(icon) {
				width: 1.29rem;
				height: 1.29rem;
				border-radius: 50%;
				// background-color: #444;
				background-size: 100% 100%;
			}
			@include e(detail) {
				display: inline-block;
				vertical-align: middle;
				width: 2.87rem;
				margin-left: 0.2rem;
				font-size: 0.32rem;
				@include m(info) {
					display: flex;
					align-items: center;
				}
				@include m(female) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--index-home-teacher-female-background;
					background-size: 100% 100%;
				}				
				@include m(male) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--index-home-teacher-male-background;
					background-size: 100% 100%;
				}
				@include m(role) {
					display: inline-block;
					margin-left: 0.1rem;
				}
				@include m(	desc) {
					font-size: 0.24rem;
					color: #7E7E7E; 
				}
			}
			@include m(contact) {
				width: 1.82rem;
				height: 1.29rem;
				/* item分组 */
				margin-left: auto;  
				font-size: 0.3rem;
				background: $--search-contact-background;
				color: rgba(255,255,255,1);
				@include center;	
			}
		}
	}
</style>