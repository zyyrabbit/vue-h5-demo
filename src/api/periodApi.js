import http from './index'

export default {
  getPeriodByCourse(param = {}) {
    return http.get('/period/lessonTime', {params: param})
  }
}
