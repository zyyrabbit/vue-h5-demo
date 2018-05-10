// cookies操作
import Cookies from 'js-cookie'
// 设置cookies
const _Cookies = {
  get: (name) => {
    return Cookies.get(name)
  },
  set: (name, value) => {
    return Cookies.set(name, value, { domain: '127.0.0.1:8080' })
  },
  remove: (name) => {
    return Cookies.remove(name)
  }
}

// 得到元素的计算样式
const getStyle = (elem, attrName) => {
				// 属性名转化合法属性名
        const toCamelCase = (str) => {
          return str.replace(
            /-(\w)/g,
            function(all, letter) {
                return letter.toUpperCase()
            })
				}
				const toDashDelimited = (str) => { return str.replace(/([A-Z])/g, '-$1') }
				// 考虑IE兼容性写法
      const style = window.getComputedStyle ? window.getComputedStyle(elem, null) : elem.currentStyle
        return style.getPropertyValue ? style.getPropertyValue(toDashDelimited(attrName)) : style.getAttribute(toCamelCase(attrName))
			}

const hasOwn = (obj, key) => {
  return hasOwnProperty.call(obj, key)
}
// 判断是否为节点
const isVNode = (node) => {
  return typeof node === 'object' && hasOwn(node, 'componentOptions')
}

// 节流函数
function throttle(action, delay) {
  let timeout = null
  let lastRun = 0
  return function() {
      if (timeout) {
         return
      }
      let elapsed = Date.now() - lastRun
      let context = this
      let args = Array.prototype.slice.call(arguments)
      let runCallback = function() {
            lastRun = Date.now()
            timeout = null
            action.apply(context, args)
      }
      if (elapsed >= delay) {
        runCallback()
      } else {
          timeout = setTimeout(runCallback, delay)
      }
  }
}
// 异步加载图片

const loadImageAsync = (src, resolve, reject) => {
    let image = new Image()
    image.src = src

    image.onload = function() {
        resolve({
            naturalHeight: image.naturalHeight, // 图片的原始大小与图片设置的大小无关
            naturalWidth: image.naturalWidth,
            src: image.src
        })
    }

    image.onerror = function(e) {
        reject(e)
    }
}
// 注册及删除监听事件
const on = (function() {
  if (document.addEventListener) {
    return function(el, event, handler) {
      el.addEventListener(event, handler, false)
    }
  } else if (document.attachEvent) {
    return function(el, event, handler) {
      el.attachEvent('on' + event, handler)
    }
  } else {
    return function(el, event, handler) {
      el[on + 'event'] = handler
    }
  }
})()
const off = (function() {
  if (document.removeEventListener) {
    return function(el, event, handler) {
      el.removeEventListener(event, handler, false)
    }
  } else if (document.detachEvent) {
    return function(el, event, handler) {
      el.detachEvent('on' + event, handler)
    }
  } else {
    return function(el, event, handler) {
      el[on + 'event'] = null
    }
  }
})()

// 注册函数
const _ = {
  on,
  off
}
// 合并对象,并没有考虑深层次的情况
const merge = (obj = {}, ...args) => {
  for (let i = 0, len = args.length; i < len; i++) {
    let tempObj = args[i]
    if (tempObj) {
      for (let prop in tempObj) {
        if (tempObj.hasOwnProperty(prop)) {
          obj[prop] = tempObj[prop]
        }
      }
    }
  }
  return obj
}

const contains = function(parentEl, el, container) {
// 第一个节点是否包含第二个节点
// contains 方法支持情况：chrome+ firefox9+ ie5+, opera9.64+(估计从9.0+),safari5.1.7+
         if (parentEl === el) {
             return true
         }
         if (!el || !el.nodeType || el.nodeType !== 1) {
             return false
         }
         if (parentEl.contains) {
             return parentEl.contains(el)
         }
         if (parentEl.compareDocumentPosition) {
             return !!(parentEl.compareDocumentPosition(el) & 16)
         }
         var prEl = el.parentNode
         while (prEl && prEl !== container) {
             if (prEl === parentEl) {
                 return true
             }
             prEl = prEl.parentNode
         }
         return false
    }
// 根据指定键值删除指定对象数组元素
const arrayObjSplice = (array, prop, key, ...add) => {
      for (let i = 0, len = array.length; i < len; i++) {
        if (array[i][prop] === key) {
           var def = array[i]
           array.splice(i, 1, ...add)
          break
        }
      }
      return def
    }
// 对象数组，设置指定key为数组第一个
const setFirst = (array, prop, key) => {
         array.unshift(arrayObjSplice(array, prop, key))
         return array
}

export {
  getStyle,
  hasOwn,
  isVNode,
  throttle,
  _,
  loadImageAsync,
  merge,
  _Cookies,
  contains,
  setFirst,
  arrayObjSplice
}
// 需要封装的方法
/* 数组去重，打乱数组，统计数组各个元素出现的次数， 字符串各个字符的出现次数，获取地址链接的各个参数 */
