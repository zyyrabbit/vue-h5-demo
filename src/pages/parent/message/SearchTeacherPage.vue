<template>
   <div class="search-teacher-list">
   		<div 
   			class="search-teacher-list--go-back"
   			@click="$router.go(-1)"
   		>X</div>
   		<div>
   			<dx-input 
			    v-model="teacherName"
	            :inputClass="inputClass"
	            placeholder="试试搜索老师姓名"
	        >
   			</dx-input>
   		</div>
		<dx-ul class="search-teacher-list__item-wrap">
			<li 
				class="search-teacher-list__item"
			>
				<div class="search-teacher">
					<div class="search-teacher--icon"></div>
					<div class="search-teacher__detail">
						<div>
							<span class="search-teacher__detail--name">杨帆</span>
							<span class="search-teacher__detail--male"></span>
							<span class="search-teacher__detail--role"></span>
						</div>
						<div class="search-teacher__detail--desc">
							英语协会副会长，多次获得国际英语口语竞赛金奖
						</div>
					</div>
					<div class="search-teacher--contact">打招呼</div>
				</div>
			</li>
			<li 
				class="search-teacher-list__item"
			>
				<div class="search-teacher">
					<div class="search-teacher--icon"></div>
					<div class="search-teacher__detail">
						<div>
							<span class="search-teacher__detail--name">杨帆</span>
							<span class="search-teacher__detail--male"></span>
							<span class="search-teacher__detail--role"></span>
						</div>
						<div class="search-teacher__detail--desc">
							英语协会副会长，多次获得国际英语口语竞赛金奖
						</div>
					</div>
					<div class="search-teacher--contact">打招呼</div>
				</div>
			</li>
		</dx-ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
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
			border-left: 0.03rem solid #369CC7 !important;
		}
		@include b(search-teacher) {
			display: flex;
			align-items: center;
			height: 1.29rem;
			
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
					margin-left: 0.1rem;
					width: 0.28rem;
					height: 0.28rem;
					background: $--search-teacher-male-background;
				}
				@include m(role) {
					display: inline-block;
					margin-left: 0.1rem;
					width: 0.66rem;
					height: 0.32rem;
					background: $--search-teacher-role-background;
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