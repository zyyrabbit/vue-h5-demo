import http from './index'

export default {
  createOrder(param = {}) {
    return http.post('/order/create', param)
  },
  fakeOrderSuccess(param = {}) {
    return http.get('/order/success', { params: param })
  }
}
