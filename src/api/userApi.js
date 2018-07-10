import http from './index'

export default {
  login(param = {}) {
    return http.get('/user/login', {params: param})
  },
  register(param = {}) {
    return http.post(`user/register`, param)
  },
  forgetPassword(param = {}) {
    return http.post(`/user/retrievePassword`, param)
  },
  updatePassword(param = {}) {
    return http.put(`/user/updateUserPassWord`, param)
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
  updateUserInfo(param = {}) {
    return http.put('/user/updateUserInfo', param)
  },
  getUserInfo(param = {}) {
    return http.get('/user/getUserInfo', { params: param })
  },
  getUserMessages(param = {}) {
    return http.get('/msg/contact', { params: param })
  },
  getChatMessages(param = {}) {
    return http.get('/msg/record', { params: param })
  },
  getlatestChatMessages(param = {}) {
    return http.get('/msg/recordNew', { params: param })
  },
  sendChatMessge(param = {}) {
    return http.post('/msg/send', param)
  },
  searchTeacher(param = {}) {
    return http.get('/user/fuzzyQuery', { params: param })
  },
  getSignHistory(param = {}) {
    return http.get('/sign/history', { params: param })
  },
  submitSign(param = {}) {
    return http.get('/sign/sign', { params: param })
  },
  submitAdvise(param = {}) {
    return http.post('/opinion/save', param)
  }
}
