export default {
	// 动态设置div元素底部元素的高度
	inserted: function(el) {
		const targetElm = el.lastElementChild
		el.style.paddingBottom = window.getComputedStyle(targetElm, null).getPropertyValue('height')
	}
}
