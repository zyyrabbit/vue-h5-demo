import Vue from 'vue'
import has from './has.js'
import footer from './footerPadding.js'

const directives = {
	has,
	footer
}
// 注册全局指令
Object.keys(directives).forEach(key => {
	Vue.directive(key, directives[key])
})
