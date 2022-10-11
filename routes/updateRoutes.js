import { methods } from '../queries/queries.js'

// Create A New Survivor
export const createSurvivor = async (req, res) => {
	const {
		first_name,
		age,
		reports,
		gender,
		inventory,
		last_location
	} = req.body


	const lastLocationId = await methods.createLastLocation(
		last_location.latitude,
		last_location.longitude
	);

	const inventoryId = await methods.createInventory(
		inventory.food,
		inventory.water,
		inventory.medication,
		inventory.ammunition,
	);

	const survivor = await methods.createSurvivor(
		first_name,
		age,
		reports,
		gender,
		inventoryId,
		lastLocationId
	)

	res.status(201).send(survivor)
}

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
