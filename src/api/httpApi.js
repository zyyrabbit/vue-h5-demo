import config from 'config'
import axios from 'axios'

const instance = axios.create({
	baseURL: config.REQUEST_ADDR,
	timeout: 3000
})
// 自定义错误类型
const ResponseNullError = function(message) {
	this.message = message
}

export default class Http {
	/* 方案1 采用promise 异步模式 */
	// post请求
	static post({url, params, succCb, errorCb}) {
		instance.post(url, params).then(
			response => {
				if (response.data.resultCode === '0') {
					succCb && succCb(response.data)
				} else {
					errorCb && errorCb(response.data)
				}
			},
			response => { errorCb && errorCb() }
		)
	}

	// delete请求
	static delete({url, params, succCb, errorCb}) {
		instance.delete(url, {params}).then(
			response => {
				if (response.data.resultCode === '0') {
					succCb && succCb(response.data)
				} else {
					errorCb && errorCb(response.data)
				}
			},
			response => { errorCb && errorCb() }
		)
	}

	// get请求
	static get({url, params, succCb, errorCb}) {
        instance.get(url, {params}).then(
			response => {
				if (response.data.resultCode === '0') {
					succCb && succCb(response.data)
				} else {
					errorCb && errorCb(response.data)
				}
			},
			response => { errorCb && errorCb() }
		)
	}
	/* 方案2 采用async 异步函数模式 */
	// 直接返回promise 用于async函数
	static async postAsync({url, params}) {
        try {
			let response = await instance.post(url, params)
			// 判断是否真的获取数据成功
			if (response.data.resultCode === '0') {
				return response.data
			} else {
				throw new ResponseNullError(response.data.resultInfo)
			}
        } catch (e) {
			// 捕捉异常错误，并打印日志,暂时不处理其他错误，只打印出来
			if (!(e instanceof ResponseNullError)) {
				console.error(e.message)
				e.message = ''
			}
			throw e
        }
	}

	// delete请求
	static async deleteAsync({url, params}) {
        try {
			let response = await instance.delete(url, {params})
			// 判断是否真的获取数据成功
			if (response.data.resultCode === '0') {
				return response.data
			} else {
				throw new ResponseNullError(response.data.resultInfo)
			}
        } catch (e) {
			// 捕捉异常错误，并打印日志,暂时不处理其他错误，只打印出来
			if (!(e instanceof ResponseNullError)) {
				console.error(e.message)
				e.message = ''
			}
			throw e
        }
	}

	// get请求
	static async getAsync({url, params}) {
        try {
			let response = await instance.get(url, {params})
			// 判断是否真的获取数据成功
			if (response.data.resultCode === '0') {
				return response.data
			} else {
				throw new ResponseNullError(response.data.resultInfo)
			}
        } catch (e) {
			// 捕捉捕捉异常错误，并打印日志,暂时不处理其他错误，只打印出来
			if (!(e instanceof ResponseNullError)) {
				console.error(e.message)
				e.message = ''
			}
			throw e
        }
	}
}
