import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs'
import * as actions from './actions.js'
import * as getters from './getters.js'
import mutations from './mutations.js'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
	latitude: '',
	homePage: {}, // 首页列表
	homeComing: {}, // 首页即将上课
	login: false,
	userInfo: null, // 用户信息
	selectingRegion: 2, // 选择中地区
	selectRegion: 2, // 选中地区 因为其他模块需要请求 必须有初始变量
	regionList: [], // 场地地区信息,
	selectPlaceDate: dayjs().format('YYYY-MM-DD'), // 场地选择日期 默认今天
	placeList: [], // 场地列表信息
	openDateId: '', // 选择场地时间段
	regionInfo: {},
	selectPeriodId: '',
	courseList: [], // 教师 - 我的课程
	messageList: [], // 消息列表
	judgeDicts: [] // 评价标签字典
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	stricts: debug,
	plugins: debug ? [createLogger()] : []
})
