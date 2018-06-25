import http from './index'

export default {
  login(param = {}) {
    return http.get('/user/login', {params: param})
  },
  loginTeacher(param = {}) {
    return http.get('/user/login', { params: { userName: 'teacher', userPwd: '123' } })
  },
  loginParent(param = {}) {
    return http.get('/user/login', { params: { userName: 'parent', userPwd: '123' } })
  },
  register(param = {}) {
    return http.get(``)
  },
  logout() {
    return http.get(``)
  }
}
