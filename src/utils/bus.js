// 用于非父子间的通信，公共组件
import Vue from 'vue'
const BaseBus = new Vue()
export default {
	$on(type, callback, vm) {
		BaseBus.$on(type, callback)
		// vm 若为 vue实例，则注册如果组件销毁时，自动注销的组件，避免组件每次懂需手动添加组件注销时，注销注册的事件
		if (vm && vm instanceof Vue) {
			Vue.config.optionMergeStrategies.destroyed(vm.$options.destroyed, function() {
				BaseBus.$off(type, callback)
			})
		}
	},
	$emit(type) {
		BaseBus.$emit(type)
	},
	$once(type, callback) {
		BaseBus.$once(type, callback)
	},
	$off(type, callback) {
		BaseBus.$off(type, callback)
	}
}
