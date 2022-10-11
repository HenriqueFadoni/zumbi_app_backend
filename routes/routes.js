import {
	fetchAllSurvivors,
	fetchAllAlive,
	fetchSurvivorById,
	fetchMarket,
	generateReport,
} from './getRoutes.js'

import {
	reportSurvivor,
	createSurvivor,
	updateLocation,
	updateInventory,
} from './updateRoutes.js'

import {
	makeTrade
} from './tradeRoute.js'

export default {
	fetchAllSurvivors,
	fetchAllAlive,
	fetchSurvivorById,
	fetchMarket,
	generateReport,
	reportSurvivor,
	createSurvivor,
	updateLocation,
	updateInventory,
	makeTrade
}