import http from './index'

export default {
  login(param = {}) {
    return http.get('/user/login', {params: param})
  },
  register(param = {}) {
    return http.post(`user/register`, param)
  },
  logout() {
    return http.get(``)
  },
  sendVc(param = {}) {
    return http.get('/user/verificationCode', { params: param })
  },
  getPersonalInfo(param = {}) {
    return http.get('/user/getUserInfoByName', { params: param })
  },
  getUserInfo(param = {}) {
    return http.get('/user/getUserInfo', { params: param })
  },
  getSignHistory(param = {}) {
    return http.get('/sign/history', { params: param })
  },
  submitSign(param = {}) {
    return http.get('/sign/sign', { params: param })
  }
}
