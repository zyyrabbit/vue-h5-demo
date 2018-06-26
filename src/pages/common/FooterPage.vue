<template>
	<!-- 主页尾部 -->
    <footer class="index-footer" >
    	<dx-ul class="index-footer__tab">
    		<li  
    			v-for="(tabComponent, index) in tabComponents"
    			:class="[
    					{'is-select': selectTab === index}
    				]"
    			:key="index" 
    			@click="goPath(tabComponent)"
    		>
					<div :class="[
    					{'is-select': selectTab === index},
    					tabComponent.iconClass
    				]">
					</div>
    			<p 
    				:class="{'is-select': selectTab === index}"
    				class="index-footer__tab--index-text"
    			>
    				{{tabComponent.title}}
    			</p>
    		</li>
    	</dx-ul>
    </footer>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		props: {
			selectTab: {
				type: Number,
				default: 0
			}
		},
		computed: {
			...mapState({
				role: state => state.userInfo.role
			}),
			tabComponents: function() {
				if (this.role === 0) {
					return [
						{title: '首页', iconClass: 'index-footer__tab--home', path: '/home'},
						{title: '场地', iconClass: 'index-footer__tab--place', path: '/place'},
						{title: '消息', iconClass: 'index-footer__tab--message', path: '/message'},
						{title: '我的', iconClass: 'index-footer__tab--me', path: '/profile'}
					]
				} else {
					return [
						{title: '首页', iconClass: 'index-footer__tab--home', path: '/home'},
						{title: '上课', iconClass: 'index-footer__tab--course', path: '/course'},
						{title: '消息', iconClass: 'index-footer__tab--message', path: '/message'},
						{title: '我的', iconClass: 'index-footer__tab--me', path: '/profile'}
					]
				}
			}
		},
		data() {
			return {
				// tabComponents: [
				// 	{title: '首页', iconClass: 'index-footer__tab--home', path: '/home'},
				// 	{title: '上课', iconClass: 'index-footer__tab--course', path: '/course'},
				// 	{title: '消息', iconClass: 'index-footer__tab--message', path: '/message'},
				// 	{title: '我的', iconClass: 'index-footer__tab--me', path: '/profile'}
				// ]
			}
		},
		methods: {
			goPath(tabComponent) {
				this.$router.push({ path: tabComponent.path })
			}
		}
	}
</script>
<style lang="scss">
	/* 底部导航栏 */
	@include b(index-footer) {
		position: fixed;
		bottom: 0;
		width: 100%;
		background: $--index-tab-background;
		height: 1.14rem;
		font-size:	0.18rem;
		margin-top: 0.73rem;
		margin-left: -0.4rem;
		margin-right: -0.4rem;
		border-top: 1px solid #D8D8D8;
		@include e(tab) {
			&>li {
				position: relative;
				display: flex;
				flex-grow: 1;
				flex-direction: column;
				align-items: center;
				padding-bottom: .1rem;
				height: 1.1rem;
				@include when(select) {
					color: #EF95BD;
				}
				>div {
					height: 1.1rem;
					width: 1.1rem;
					background-size: 100% 100%!important;
				}
				>p {
					text-align: center;
					width: 100%;
					position: absolute;
					bottom: 0;
					padding-bottom: 0.1rem;
				}
			}
			/* 底部栏背景图标 */
			@include m(home) {
				background: $--index-tab-home-background;
				@include when(select) {
					background: $--index-tab-select-home-background;
				}
			}
			@include m(place) {
				background: $--index-tab-place-background;
				@include when(select) {
					background: $--index-tab-select-place-background;
				}
			}
			@include m(course) {
				background: $--index-tab-course-background;
				@include when(select) {
					background: $--index-tab-select-course-background;
				}
			}
			@include m(message) {
				background: $--index-tab-message-background;
				@include when(select) {
					background: $--index-tab-select-message-background;
				}
			}
			@include m(me) {
				background: $--index-tab-me-background;
				@include when(select) {
					background: $--index-tab-select-me-background;
				}
			}
		}
	}
</style>