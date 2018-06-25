import * as Types from '../mutation-types.js'
/* login state 状态 */
const state = {
    token: null, // token信息
    userInfo: {
        role: 1
    } // 根据token去获取用户信息
}
/* login getters */
const getters = {
    token: state => state.token,
    userInfo: state => state.userInfo
}
/* login actions */
const actions = {}
/* login mutations */
const mutations = {
    [Types.SET_USER_INFO](state, userInfo) {
        // 查找第一个满足条件数组元素即返回
        state.userInfo = userInfo
    },
    [Types.SET_TOKEN](state, token) {
        state.token = token
    }
}

export default {
	state,
    getters,
    actions,
    mutations
}
