import {
  GET_USERINFO,
  RECORD_USERINFO,
  SET_HOMEPAGE,
  SET_HOMECOMING,
  SET_PLACELIST,
  SET_REGIONLIST,
  SELECTING_REGION,
  SET_SELECTREGION,
  SET_SELECT_PLACE_DATE,
  SET_REGIONINFO,
  SET_COURSELIST,
  SET_JUDGEDICTS,
  SET_OPENDATE_ID,
  SET_MESSAGELIST,
  SET_SELECT_PERIOD_ID,
  SET_OPENDATE_IDS,
  SET_OPENDATE_LIST
} from './mutation-types.js'
import { setStore } from 'utils/utils'

export default {
  [SET_HOMEPAGE](state, data) {
    state.homePage = data
  },
  [SET_HOMECOMING](state, data) {
    state.homeComing = data
  },
  [SET_PLACELIST](state, data) {
    state.placeList = data
    setStore('region_id', data.regionId)
  },
  [SET_SELECT_PLACE_DATE](state, data) {
    state.selectPlaceDate = data
  },
  [SET_OPENDATE_ID](state, data) {
    state.openDateId = data
  },
  [SET_OPENDATE_IDS](state, data) {
    state.openDateIds = data
  },
  [SET_OPENDATE_LIST](state, data) {
    state.openDateList = data
  },
  [SET_REGIONINFO](state, data) {
    state.regionInfo = data
  },
  [SELECTING_REGION](state, data) {
    state.selectingRegion = data
  },
  [SET_SELECTREGION](state, data) {
    state.selectingRegion = data
    state.selectRegion = data
  },
  [SET_REGIONLIST](state, data) {
    state.regionList = data
  },
  [SET_JUDGEDICTS](state, data) {
    state.judgeDicts = data
  },
  [SET_COURSELIST](state, data) {
    state.courseList = data
  },
  [SET_MESSAGELIST](state, data) {
    state.messageList = data
  },
  [SET_SELECT_PERIOD_ID](state, data) {
    state.selectPeriodId = data
  },
  [RECORD_USERINFO](state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.id)
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
