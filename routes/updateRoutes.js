import { methods } from '../queries/queries.js'

// Update Survivor Location
export const updateLocation = async (req, res) => {
	const {
		id,
		latitude,
		longitude
	} = req.body

	const newLocation = await methods.updateLocation(
		id,
		latitude,
		longitude
	)

	res.status(201).send(newLocation)
}

// Update Survivor Inventory
export const updateInventory = async (req, res) => {
	const {
		id,
		food,
		water,
		ammunition,
		medication
	} = req.body

	const newInventory = await methods.updateInventory(
		id,
		food,
		water,
		medication,
		ammunition
	)

	res.status(201).send(newInventory)
}
