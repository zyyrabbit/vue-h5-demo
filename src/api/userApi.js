import http from './index'

export default {
  login(param = {}) {
    return http.get('/user/login', {params: param})
  },
  register(param = {}) {
    return http.get(``)
  },
  logout() {
    return http.get(``)
  }
}
