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
  }
}
