import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
// import * as state from './state.js'
import mutations from './mutations.js'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
	latitude: '',
	homePage: {}, // 首页列表
	login: false,
	userInfo: null, // 用户信息
	placeList: [], // 场地列表信息,
	selectingRegion: 2, // 选择中地区
	selectRegion: 2, // 选中地区
	regionList: [], // 场地地区信息,
	selectPlaceDate: null // 场地选择日期与索引
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	stricts: debug,
	plugins: debug ? [createLogger()] : []
})
