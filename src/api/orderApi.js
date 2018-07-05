import http from './index'

export default {
  createPlaceOrder(param = {}) {
    return http.post('/orderPay/pay', param)
  }
}
