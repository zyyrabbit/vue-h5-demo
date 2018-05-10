import Vue from 'vue'
import currency from './currencyFilter.js'
import { timeStamp2Date } from './dateFilter.js'

const filters = {
	currency,
	timeStamp2Date
}
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
