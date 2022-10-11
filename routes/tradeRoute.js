import { methods } from '../queries/queries.js'

export const makeTrade = async (req, res) => {
	const {
		firstTrader,
		secondTrader
	} = req.body

	let firstTotalPoints = 0
	let secondTotalPoints = 0
	const marketValue = await methods.getMarket()

	for (const item in firstTrader) {
		if (item !== 'id') {
			firstTotalPoints += firstTrader[item] * marketValue[item]
			secondTotalPoints += secondTrader[item] * marketValue[item]
		}
	}

	const fairTrade = firstTotalPoints === secondTotalPoints
	const isNotTradeEmpty = firstTotalPoints > 0 && secondTotalPoints > 0

	if (fairTrade && isNotTradeEmpty) {
		const [firstOldInv] = await methods.getInventory(firstTrader.id)
		const [secondOldInv] = await methods.getInventory(secondTrader.id)

		const firstNewInv = {
			water: firstOldInv.water - firstTrader.water + secondTrader.water,
			food: firstOldInv.food - firstTrader.food + secondTrader.food,
			medication: firstOldInv.medication - firstTrader.medication + secondTrader.medication,
			ammunition: firstOldInv.ammunition - firstTrader.ammunition + secondTrader.ammunition
		}

		const secondNewInv = {
			water: secondOldInv.water - secondTrader.water + firstTrader.water,
			food: secondOldInv.food - secondTrader.food + firstTrader.food,
			medication: secondOldInv.medication - secondTrader.medication + firstTrader.medication,
			ammunition: secondOldInv.ammunition - secondTrader.ammunition + firstTrader.ammunition
		}

		const firstTraderResult = await methods.updateInventory(
			firstTrader.id,
			firstNewInv.food,
			firstNewInv.water,
			firstNewInv.medication,
			firstNewInv.ammunition,
		)
		const secondTraderResult = await methods.updateInventory(
			secondTrader.id,
			secondNewInv.food,
			secondNewInv.water,
			secondNewInv.medication,
			secondNewInv.ammunition,
		)

		res.status(201).send({
			firstTraderResult,
			secondTraderResult
		})
	} else {
		res.status(500).send("Trade is not equal or empty!")
	}
}
