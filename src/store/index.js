import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as state from './state.js'
import mutations from './mutations.js'
import authStore from './modules/authStore.js'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations,
	modules: {
		authStore
	},
	stricts: debug,
	plugins: debug ? [createLogger()] : []
})