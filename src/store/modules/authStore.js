import * as Types from '../mutation-types.js'
import Bus from 'utils/bus.js'
/* login state 状态 */
const state = {
    token: null, // token信息
    customer: {}, // 根据token去获取用户信息
    authorization: ['anon'] // 动态从后端获取权限信息
}
/* login getters */
const getters = {
    token: state => state.token,
    authorization: state => state.authorization,
    customer: state => state.customer,
    userInfo: state => {
        return {
            title: state.customer.custName,
            link: '/account/cart',
            gap: '|',
            auth: 'authc'
        }
    }
}
/* login actions */
const actions = {}
/* login mutations */
const mutations = {
    [Types.SET_CUST_INFO](state, { customer }) {
        // 查找第一个满足条件数组元素即返回
        state.customer = customer
    },
    [Types.SET_TOKEN](state, { token }) {
        state.token = token
    },
    [Types.SET_AUTH_INFO](state, { authorization }) {
        // 查找第一个满足条件数组元素即返回
        state.authorization = authorization
        Bus.$emit('auth-state')
    }
}

export default {
	state,
    getters,
    actions,
    mutations
}
