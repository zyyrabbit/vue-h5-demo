<template>
   <div class="teacher-my-student">
   		<dx-header is-close></dx-header>
   	    <div class="teacher-my-student--title">
   	    	我的学员
   	    </div>
   	    <ul>
   	    	<li 
   	    		v-for="(item, index) of items"
   	    		:key="index"
   	    		class="teacher-my-student__item"
   	    	>
				<div class="teacher-my-student__item--left">
					<p>{{item.studentName}}</p>
					<p>{{item.telephone}}</p>
				</div>
				<dx-button 
					type="primary"
					class="teacher-my-student__item--right"
					@dx-button-click="goPath(item)"
				>
					<span v-if="item.cancel">同意取消</span>
					<span v-else>已付款</span>
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
						telephone: 13878786565,
						cancel: true,
						id: 0
					},
					{
						studentName: '刘艳梅',
						telephone: 13878786565,
						cancel: true,
						id: 1
					},
					{
						studentName: '刘天明',
						telephone: 13878786565,
						cancel: false,
						id: 2
					},
					{
						studentName: '张家豪',
						telephone: 13878786565,
						cancel: false,
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
	@include b(teacher-my-student) {
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
				height: 0.58rem;
				width: 1.84rem;
				border-radius: 0.4rem;
				font-size: 0.3rem;
			}
		}
	}	
</style>