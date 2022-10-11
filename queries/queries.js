import {
	getSurvivors,
	getSuvivorsAlive,
	getSurvivor,
	getInventory,
	getLastLocation,
	getMarket,
	generateReport
} from './queriesGet.js'
import {
	updateLocation,
	updateInventory,
	createSurvivor,
	createInventory,
	createLastLocation
} from './queriesPost.js'

export const methods = {
	getSurvivors,
	getSuvivorsAlive,
	getSurvivor,
	getInventory,
	getLastLocation,
	getMarket,
	generateReport,
	updateLocation,
	updateInventory,
	createSurvivor,
	createInventory,
	createLastLocation
}