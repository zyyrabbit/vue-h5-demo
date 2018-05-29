// 采用策略模式
// 正确返回字符串的长度---1.可以采用Array.from方法 或 使用正则表达式
const caluStrLen = (str) => { return str.replace(/[\u0391-\uFFE5]/g, 'aa').length }
const execCallback = (callback, value) => {
    callback && typeof callback === 'function' && callback(value)
}
export default {
    // args值为单个rule对象
	required: (rule, value, callback) => {
        if (value === '') {
            execCallback(callback, value)
            return true
        }
        return false
     },
    minLength: (rule, value, callback) => {
        if (caluStrLen(value) < rule.min) {
            execCallback(callback, value)
            return true
        }
        return false
    },
    maxLength: (rule, value, callback) => {
        if (caluStrLen(value) > rule.max) {
            execCallback(callback, value)
            return true
        }
        return false
    },
    isMobile: (rule, value, callback) => {
        if (!/^1[34578][0-9]{9}$/.test(+value)) {
            execCallback(callback, value)
            return true
        }
        return false
    },
    confirmSame: (rule, value, callback) => {
        if (value !== rule.sameFieldValue) {
            execCallback(callback, value)
            return true
        }
        return false
    },
    // 判断输入是否为中文、字母，数字，下划线
    isNumAndCharAnd_: (rule, value, callback) => {
        if (!/^[\w_]|[\u4E00-\u9FA5]*$/.test(value)) {
            execCallback(callback, value)
            return true
        }
        return false
    }
}
