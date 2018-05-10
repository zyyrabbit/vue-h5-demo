<template>
   <div class="index">
	    <!-- 主页主题 -->
	    <main class="index-main">
	    	<component :is="currentTabComponent"></component>
	    </main>
	    <!-- 主页尾部 -->
	    <footer class="index-footer" >
	    	<dx-ul class="index-footer__tab">
	    		<li  
	    			v-for = "(tabComponent, index) in tabComponents"
	    			:class="[
	    					{'is-select': selectTab === index},
	    					tabComponent.iconClass
	    				]"
	    			:key="index" 
	    			@click="select(index, tabComponent)"
	    		>
	    			<p 
	    				:class="{'is-select': selectTab === index}"
	    				class="index-footer__tab--index-text"
	    			>
	    				{{tabComponent.title}}
	    			</p>
	    		</li>
	    	</dx-ul>
	    </footer>
    </div>
	
</template>
<script>
	import HomePage from './HomePage.vue'
	import CoursePage from './CoursePage.vue'
	import MessagePage from './MessagePage.vue'
	import MePage from './MePage.vue'
	/* import AuthApi from 'api/authApi.js'
    import { mapMutations, mapGetters } from 'vuex'
    import * as Types from 'store/mutation-types.js'
    import Bus from 'utils/bus.js' */
	export default {
		data() {
			return {
				currentTabComponent: HomePage,
				selectTab: 0,
				tabComponents: [
					{title: '首页', iconClass: 'index-footer__tab--home', component: HomePage},
					{title: '课程', iconClass: 'index-footer__tab--course', component: CoursePage},
					{title: '消息', iconClass: 'index-footer__tab--message', component: MessagePage},
					{title: '我的', iconClass: 'index-footer__tab--me', component: MePage}
				]
			}
		},
		methods: {
			select(index, tabComponent) {
				this.selectTab = index
				this.currentTabComponent = tabComponent.component
			}
		}
	}
</script>
<style  lang="scss">
	@include b(index) {
		background-color: $--index-background-color;
		/* 网站主题内容 */
		@include b(index-main) {
		    padding: 0 0.4rem;
		}
		/* 底部导航栏 */
		@include b(index-footer) {
			height: 1.14rem;
			font-size:	0.18rem;
			margin-top: 0.73rem;
			padding: 0 0.4rem;
			border-top: 1px solid #D8D8D8;
			@include e(tab) {
				&>li {
					position: relative;
					width: 1.1rem;
					height: 1.1rem;
					@include when(select) {
						color: #EF95BD;
					}
					>p {
						position: absolute;
						left: 0.37rem;
						bottom: 0.16rem;
					}
				}
				/* 底部栏背景图标 */
				@include m(home) {
					background: $--index-tab-home-background;
					@include when(select) {
						background: $--index-tab-select-home-background;
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
	}
	
</style>