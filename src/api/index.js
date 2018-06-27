import config from 'config'
import axios from 'axios'

Object.defineProperties(axios, {
  $context: {
    get() {
      return config.REQUEST_ADDR
    }
  }
})

// 自定义错误类型
const ResponseNullError = function(message) {
	this.message = message
}

const http = axios.create({
  baseURL: axios.$context
})

http.interceptors.response.use(
  response => {
    // FIXME
    if (response.data.resultCode === '0') {
      return Promise.resolve(response.data)
    } else if (response.data.resultCode === '999') {
      // TODO
      this.$router.go('/login')
    } else {
      ResponseNullError(response.data.resultMsg)
      return Promise.reject(response.data)
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // TODO
        case 500:
          ResponseNullError(error.response.data)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default http
