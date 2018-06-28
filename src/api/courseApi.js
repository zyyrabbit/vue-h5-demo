import http from './index'

export default {
  fetchHomepage(param = {}) {
    return http.get('/course/homePage', { params: param })
  },
  searchCourse(param = {}) {
    return http.get('/course/fuzzyQuery', { params: param })
  },
  getCourseDetl(param = {}) {
    return http.get('/course/getCourseInfo', { params: param })
  }
}
