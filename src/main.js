import Vue from 'vue'
import Store from 'store'
import VueRouter from 'vue-router'
import Router from 'router'
import VueUI from 'components'
import Lazy from 'components/lazy'
// 屏幕适配
import 'utils/rem.js'
import 'utils/filters'
import 'directives'
import App from './App.vue'

Vue.use(Lazy)
Vue.use(VueRouter)
Vue.use(VueUI)
/* eslint-disable no-new */
new Vue({
	el: '#wrap-app',
	router: Router,
	store: Store,
	render: h => h(App) // 这样设置，则只需要Runtime构建的Vue库
})
