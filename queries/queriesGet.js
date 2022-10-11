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
