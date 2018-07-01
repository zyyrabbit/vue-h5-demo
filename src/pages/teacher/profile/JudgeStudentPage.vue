<template>
   <div class="teacher-judge-student">
   		<dx-header></dx-header>
   	    <div class="teacher-judge-student--title">
   	    	我的学员(打分)
   	    </div>
   	    <ul>
   	    	<li 
   	    		v-for="(item, index) of items"
   	    		:key="index"
   	    		class="teacher-judge-student__item"
   	    	>
				<div class="teacher-judge-student__item--left">
					<p>{{item.studentName}}</p>
					<p v-if="item.friend">已是好友,点击聊天</p>
					<p v-else>点击添加好友</p>
				</div>
				<dx-button 
					type="primary"
					class="teacher-judge-student__item--right"
					@dx-button-click="goPath(item)"
				>
					<span v-if="item.friend">查看打分</span>
					<span v-else>去打分</span>
				</dx-button>
   	    	</li>
   	    </ul>
   	    <transition 
         name="router-slide"  
         mode='out-in'
      	>
         <router-view class="full-screen"/>
      </transition>
    </div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		},
		data() {
			return {
				items: [
					{
						studentName: '陈小春',
						friend: 1,
						id: 0
					},
					{
						studentName: '刘艳梅',
						friend: 1,
						id: 1
					},
					{
						studentName: '刘天明',
						friend: 0,
						id: 2
					},
					{
						studentName: '张家豪',
						friend: 0,
						id: 3
					}
				]
			}
		},
		methods: {
			goPath(item) {
				if (item.friend) {
					this.goNext('/tacher/')
				} else {
					this.goNext('/teacher/judgeStu/DojudgeStu')
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(teacher-judge-student) {
		padding: 0.33rem 0.37rem 0;
		color: #484848;
		font-size: 0.34rem;
		@include m(title) {
			font-size: 0.6rem;
		}
		@include e(item) {
			display: flex;
			align-items: center;
			margin-top: 0.23rem;
			padding: 0.54rem 0;
			&:not(:last-child) {
				border-bottom: 0.02rem solid #EBEBEB;
			}
			@include m(left) {
				flex-grow: 1;
				p:nth-child(2) {
					margin-top: 0.21rem;
					color: #57B8D7;
					font-size: 0.34rem;
				}
			}
			@include m(right) {
				height: 0.9rem;
				width: 2.14rem;
				border-radius: 0.4rem;
				font-size: 0.3rem;
			}
		}
	}	
</style>