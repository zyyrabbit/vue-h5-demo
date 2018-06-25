import {
  GET_USERINFO,
  RECORD_USERINFO,
  SET_HOMEPAGE
} from './mutation-types.js'
import { setStore } from '../utils/utils'

export default {
  [SET_HOMEPAGE](state, data) {
    state.homePage = data
  },
  [RECORD_USERINFO](state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  },
  [GET_USERINFO](state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = { ...info }
    } else {
      state.userInfo = null
    }
  }
}
