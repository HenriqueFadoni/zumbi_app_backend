import * as query from './queryStrings.js'
import { pool } from '../database.js'
import {
	getSurvivor,
	getInventory,
	getLastLocation,
	getMarket,
} from './queriesGet.js'

// Post Queries
export async function reportSurvivor(id) {
	let { reports } = await getSurvivor(id);
	reports += 1;
	const isInfected = reports >= 3 ? true : false

	if (isInfected) {
		await pool.query(query.reportInfectedSurvivor, [reports, id])
		return await getSurvivor(id)
	} else {
		await await pool.query(query.reportSurvivor, [reports, id])
		return await getSurvivor(id)
	}
}

export async function updateLocation(id, latitude, longitude) {
	await pool.query(query.updateLocation, [latitude, longitude, id])
	return await getLastLocation(id)
}

export async function updateInventory(id, food, water, medication, ammunition) {
	await pool.query(query.updateInventory, [food, water, medication, ammunition, id])
	return await getInventory(id)
}

export async function createSurvivor(
	first_name,
	age,
	reports,
	gender,
	inventory_table_id,
	last_location_id
) {
	const infected = reports >= 3 ? true : false

	const [result] = await pool.query(query.createSurvivor, [
		first_name,
		age,
		reports,
		gender,
		infected,
		inventory_table_id,
		last_location_id
	])

	const id = result.insertId
	return getSurvivor(id)
}

export async function createInventory(food, water, medication, ammunition) {
	const market = await getMarket();

	const calcFoodPoints = (food * market.food)
	const calcWaterPoints = (water * market.water)
	const calcMedicationPoints = (medication * market.medication)
	const calcAmmPoints = (ammunition * market.ammunition)
	const totalPoints = calcFoodPoints + calcWaterPoints + calcMedicationPoints + calcAmmPoints;

	const [result] = await pool.query(query.createInventory, [food, water, medication, ammunition, totalPoints])
	return result.insertId
}

export async function createLastLocation(latitude, longitude) {
	const [result] = await pool.query(query.createLastLocation, [latitude, longitude])
	return result.insertId
}