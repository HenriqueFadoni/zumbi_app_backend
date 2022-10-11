import express from 'express'
import routes from './routes/routes.js'

export const app = express()

app.use(express.json())

// Set Cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
 
// Query Survivor APIs
app.get('/survivors', routes.fetchAllSurvivors)
app.get('/survivors/alive', routes.fetchAllAlive)
app.get('/survivors/:id', routes.fetchSurvivorById)
app.get('/market', routes.fetchMarket)
app.get('/generateReport', routes.generateReport)

app.post('/updateLocation', routes.updateLocation)
app.post('/updateInventory', routes.updateInventory)

// Basic Connection Check
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

app.listen(8080, () => {
	console.log('Server is running on port 8080')
})
