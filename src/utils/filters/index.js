import Vue from 'vue'
import currency from './currencyFilter.js'
import { formatInEvaluation, timeStamp2Date, formatInPeriod, formatInChat, formatDate } from './dateFilter.js'

const filters = {
	currency,
	timeStamp2Date,
	formatInEvaluation,
	formatInPeriod,
	formatInChat,
	formatDate
}
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
