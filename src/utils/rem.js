/* 一般使用移动端设计稿，如果是pc端建议还是采用px */
/* (function(doc, win, designWidth, rem2px) {
	let docEl = doc.documentElement
	let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	let recalc = function() {
		var clientWidth = docEl.clientWidth // layout viewport window.innerWidth  visual viewport
		if (!clientWidth) return
			// 计算不准确有误差
			// https://juejin.im/entry/5833f572128fe1006ccda98b
		docEl.style.fontSize = rem2px * (clientWidth / designWidth) + 'px'
	}
	if (!doc.addEventListener) return
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window, 1519, 10) */
(function(designWidth, rem2px) {
    let d = window.document.createElement('div')
    d.style.width = '1rem'
    d.style.display = 'none'
    let head = window.document.getElementsByTagName('head')[0]
    head.appendChild(d)
    let defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
    d.remove()
    d = null
    let designWidthFontSize = rem2px / defaultFontSize * 100
		console.info(window.innerWidth + ' ==== ' + designWidth + ' ==== ' +  designWidthFontSize)
    document.documentElement.style.fontSize = window.innerWidth / designWidth * designWidthFontSize + '%'
    /* let st = document.createElement('style')
    let portrait = `@media screen and (min-width: ${window.innerWidth}px) {
      			html {
      				font-size: ${window.innerWidth / designWidth * designWidthFontSize}%;
    			}
    		}`
    let landscape = `@media screen and (min-width: ${window.innerHeight}px) {
      			html {
      				font-size: ${window.innerHeight / designWidth * designWidthFontSize}%;
    			}
    		}`
    st.innerHTML = portrait + landscape
    head.appendChild(st)
    st = null */
}(750, 100))
