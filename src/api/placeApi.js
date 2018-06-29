import http from './index'

export default {
  getRegionList(param = {}) {
    return http.get('/region/queryRegionInfo', {params: param})
  }
}
