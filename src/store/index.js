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
	selectingRegion: 2, // 选择中地区
	selectRegion: 2, // 选中地区 因为其他模块需要请求 必须有初始变量
	regionList: [], // 场地地区信息,
	selectPlaceDate: null, // 场地选择日期
	placeList: [], // 场地列表信息
	regionInfo: null
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	stricts: debug,
	plugins: debug ? [createLogger()] : []
})
