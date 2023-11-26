const express = require('express')
const app = express()

require('dotenv').config()

const driversRouter = require('./routes/drivers.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/drivers', driversRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server running...')
})