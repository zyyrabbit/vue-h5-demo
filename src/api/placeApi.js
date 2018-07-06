import http from './index'

export default {
  getRegionList(param = {}) {
    return http.get('/region/queryRegionInfo', {params: param})
  },
  getRegionInfo(param = {}) {
    return http.get('/field/queryRegionInfoById', { params: param })
  },
  getFieldList(param = {}) {
    return http.get('/field/queryFieldInfo', { params: param })
  },
  getFieldDetl(param = {}) {
    return http.get('/field/reserveFieldInfo', { params: param })
  },
  getFieldOpenList(param = {}) {
    return http.get('/field/reserveFieldOpenDateInfo', { params: param })
  },
  getFieldEvalutions(param = {}) {
    return http.get('/evaluation/placeEvaluation', { params: param })
  },
  getUserField(param = {}) {
    return http.get('/user/userFieldInfo', { params: param })
  },
  getUserOpenField(param = {}) {
    return http.get('/user/userOpenFieldInfo', { params: param })
  },
  submitRelate(param = {}) {
    return http.post('/field/relationFieldInfo', param)
  }
}
