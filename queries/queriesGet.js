import * as query from './queryStrings.js'
import { pool } from '../database.js'

// Get Queries
export async function getSurvivors() {
	const [rows] = await pool.query(query.fetchAllSurvivors)
	return rows
}

export async function getSuvivorsAlive() {
	const [notInfectedList] = await pool.query(query.fetchAllAlive)
	return notInfectedList
}

export async function getSurvivor(id) {
	const [rows] = await pool.query(query.fetchSurvivorById, [id])
	return rows[0]
}

export async function getInventory(id) {
	const [rows] = await pool.query(query.getInventory, [id])
	return rows
}

export async function getLastLocation(id) {
	const [rows] = await pool.query(query.getLastLocation, [id])
	return rows
}

export async function getMarket() {
	const [market] = await pool.query(query.getMarket);
	return market[0]
}

export async function generateReport() {
	const notInfectedList = await getSuvivorsAlive()
	const [infectedList] = await pool.query(query.generateReport)

	return { notInfectedList, infectedList }
}