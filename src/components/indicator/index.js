import Vue from 'vue'
import DxIndicator from './dx-indicator.vue'
import { merge } from 'utils/utils.js'
const DxIndicatorConstructor = Vue.extend(DxIndicator)
let instance
const initInstance = () => {
	let mountEl = document.createElement('div')
	instance = new DxIndicatorConstructor({
		el: mountEl
	})
}
class Indicator {
	static open(options) {
		if (!instance) {
			initInstance()
		}
		merge(instance, options)
		document.body.appendChild(instance.$el)
		Vue.nextTick(() => {
			instance.visible = true
		})
	}

	static close() {
		instance.visible = false
	}
}
Vue.prototype.$indicator = Indicator
export default Indicator
