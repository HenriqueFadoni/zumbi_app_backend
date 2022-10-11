import express from 'express'

export const app = express()

app.use(express.json())

// Set Cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})
 
// Basic Connection Check
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

app.listen(8080, () => {
	console.log('Server is running on port 8080')
})
