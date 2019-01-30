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
  },
  assignHomework(param = {}) {
    return http.post('/workTeacher/save', param)
  },
  updateHomework(param = {}) {
    return http.put('/workTeacher/update', param)
  },
  getAssignedHomework(id) {
    return http.get(`/workTeacher/get/${id}`)
  },
  doHomework(param = {}) {
    return http.post('/workStudent/save', param)
  },
  doHomeworkUpdate(param = {}) {
    return http.put('/workStudent/update', param)
  },
  getDoHomework(id) {
    return http.get(`/workStudent/getByStudent/${id}`)
  },
  viewHomeworks(id) {
    return http.get(`/workStudent/getByTeacher/${id}`)
  }
}
