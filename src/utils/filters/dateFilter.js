function add0(m) { return m < 10 ? '0' + m : m }
// 将时间戳转换成 YYYY-MM-DD hh:mm:ss
export const timeStamp2Date = function(date) {
	// 如果date为10位不需要乘1000
	date = parseInt(date)
	if (date.toString().length < 10) {
		date = date * 1000
	}
    date = new Date(date)
    let Y = date.getFullYear()
    let M = date.getMonth() + 1
    let D = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    return Y + '-' + add0(M) + '-' + add0(D) + ' ' + add0(h) + ':' + add0(m) + ':' + add0(s)
}
