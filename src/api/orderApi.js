import http from './index'

export default {
  createOrder(param = {}) {
    return http.post('/order/create', param)
  },
  createFieldOrder(param = {}) {
    return http.post('/order/createFieldOrder', param)
  },
  fakeOrderSuccess(param = {}) {
    return http.get('/order/success', { params: param })
  },
  refundOrder(orderId) {
    return http.get(`/order/refund/${orderId}`)
  }
}
