// GET STRINGS
export const fetchAllSurvivors = `
SELECT * FROM survivors 
INNER JOIN last_location ON survivors.id=last_location.id
INNER JOIN inventory_table ON survivors.id=inventory_table.id
`

export const fetchAllAlive = `
SELECT *
FROM survivors
INNER JOIN inventory_table ON survivors.id=inventory_table.id
WHERE survivors.infected = false
`

export const fetchSurvivorById = `
SELECT *
FROM survivors
INNER JOIN last_location ON survivors.id=last_location.id
INNER JOIN inventory_table ON survivors.id=inventory_table.id
WHERE survivors.id = ? 
`
