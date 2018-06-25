import http from './index'

export default {
  fetchHomepage(param = {}) {
    return http.get('/course/homePage', { params: param })
  }
}
