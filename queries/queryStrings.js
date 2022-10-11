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
export const getInventory = `
SELECT *
FROM inventory_table
WHERE id = ?
`
export const getLastLocation = `
SELECT *
FROM last_location
WHERE id = ?
`

export const getMarket = `
SELECT * FROM market
`
export const generateReport = `
SELECT *
FROM survivors
INNER JOIN inventory_table ON survivors.id=inventory_table.id
WHERE survivors.infected = true
`

// POST STRINGS
export const reportSurvivor = `
UPDATE survivors SET survivors.reports = ? WHERE survivors.id = ? 
`

export const reportInfectedSurvivor = `
UPDATE survivors SET survivors.reports = ?, survivors.infected = '1' WHERE survivors.id = ? 
`

export const updateLocation = `
UPDATE last_location SET last_location.latitude = ?, last_location.longitude = ? WHERE last_location.id = ? 
`

export const updateInventory = `
UPDATE inventory_table 
SET inventory_table.food = ?, inventory_table.water = ?, inventory_table.medication = ?, inventory_table.ammunition = ? 
WHERE inventory_table.id = ? 
`

export const createSurvivor = `
INSERT INTO survivors (first_name, age, reports, gender, infected, inventory_table_id, last_location_id)
VALUES (?,?,?,?,?,?,?)
`

export const createInventory = `
INSERT INTO inventory_table (food, water, medication, ammunition, totalPoints)
VALUES (?,?,?,?,?)
`

export const createLastLocation = `
INSERT INTO last_location (latitude, longitude)
VALUES (?,?)
`