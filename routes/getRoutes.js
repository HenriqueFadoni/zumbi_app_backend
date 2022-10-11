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

// Fetch Market Value For Items
export const fetchMarket = async (req, res) => {
	const market = await methods.getMarket()
	res.send(market)
}

// Generate A Report For All Survivors
export const generateReport = async (req, res) => {
	const { infectedList, notInfectedList } = await methods.generateReport()
	const totalNotInfected = notInfectedList.length
	const totalInfected = infectedList.length
	const totalSurvivors = totalInfected + totalNotInfected
	let pointsLost = 0;
	const totalItems = {
		food: 0,
		water: 0,
		medication: 0,
		ammunition: 0
	}

	const infectedPercentage = Math.round(((totalInfected * 100) / totalSurvivors) * 100 / 100)
	const notInfectedPercentage = Math.round(((totalNotInfected * 100) / totalSurvivors) * 100 / 100)

	infectedList.forEach(infected => {
		pointsLost += infected.totalPoints
	})

	notInfectedList.forEach(survivor => {
		totalItems.food += survivor.food
		totalItems.water += survivor.water
		totalItems.medication += survivor.medication
		totalItems.ammunition += survivor.ammunition
	})

	const averageItems = {
		food: Math.round((totalItems.food / totalNotInfected) * 100/ 100),
		water:  Math.round((totalItems.water / totalNotInfected) * 100/ 100),
		medication:  Math.round((totalItems.medication / totalNotInfected) * 100/ 100),
		ammunition:  Math.round((totalItems.ammunition / totalNotInfected) * 100/ 100)
	}

	const response = {
		pointsLost,
		infectedPercentage,
		notInfectedPercentage,
		averageItems
	}

	res.send(response)
}