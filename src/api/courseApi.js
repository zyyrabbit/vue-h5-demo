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
  },
  getCourseEvaluation(param = {}) {
    return http.get('/evaluation/courseEvaluation', { params: param })
  },
  getUserEvaluation(param = {}) {
    return http.get('/evaluation/queryPeriodPlace', { params: param })
  },
  getCourseByUser(param = {}) {
    return http.get('/course/queryCourse', { params: param })
  },
  getJudgeDict(param = {}) {
    return http.get('/dictionary/queryDictionary', { params: param })
  },
  submitJudge(param = {}) {
    return http.post('/evaluation/insertEvaluationInfo', param)
  },
  // 课程相关
  saveCourse(param = {}) {
    return http.post('/course/inseruUpdateCourse', param)
  },
  getCourseCategory(param = {}) {
    return http.get('/category/queryAllCategory', { params: param })
  },
  deleteCourse(param = {}) {
    return http.delete('/course/deleteCourse', { params: param })
  }
}
