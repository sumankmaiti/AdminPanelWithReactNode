require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDB = require('./connect/connectDB')
const routes = require('./routes/routes')

connectDB()
const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'API is running' })
})

app.use('/api/for', routes)

const port = process.env.port || 4000

app.listen(port, () => console.log('Server is running on port', port))