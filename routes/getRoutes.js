import { methods } from '../queries/queries.js'

// Fetch All Survivors In DataBase
export const fetchAllSurvivors = async (req, res) => {
	const survivors = await methods.getSurvivors()
	res.send(survivors)
}

// Fetch All Alive Survivors In DataBase
export const fetchAllAlive = async (req, res) => {
	const survivors = await methods.getSuvivorsAlive()
	res.send(survivors)
}

// Fetch All Survivor By Id
export const fetchSurvivorById = async (req, res) => {
	const id = req.params.id
	const survivor = await methods.getSurvivor(id)

	res.status(201).send(survivor)
}

