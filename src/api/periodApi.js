import http from './index'

export default {
  getPeriodByCourse(param = {}) {
    return http.get('/period/lessonTime', {params: param})
  },
  getPeriodList(param = {}) {
    return http.get('/period/queryLesson', { params: param })
  },
  getPeriodUsers(param = {}) {
    return http.get('/course/queryCourseNumber', { params: param })
  },
  getStuComment(param = {}) {
    return http.get('/evaluation/studentEvaluation', { params: param })
  },
  submitStuComment(param = {}) {
    return http.post('/evaluation/insertStudentEvaluation', param)
  }
}
