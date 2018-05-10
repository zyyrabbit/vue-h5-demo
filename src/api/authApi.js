import Http from './httpApi.js'

export default class AuthApi {
	// 用户登录
	static login(params = {}) {
        return Http.postAsync({url: '/customer/login', params})
	}
	// 用户注册
	static register(params = {}) {
		return Http.postAsync({url: '/customer/addcust', params})
	}
	// 用户退出
	static loginout(params = {}) {
		return Http.postAsync({url: '/customer/loginout', params})
	}
}
