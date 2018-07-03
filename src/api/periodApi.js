import http from './index'

export default {
  getPeriodByCourse(param = {}) {
    return http.get('/period/lessonTime', {params: param})
  },
  getPeriodList(param = {}) {
    return http.get('/period/queryLesson', { params: param })
  }
}
