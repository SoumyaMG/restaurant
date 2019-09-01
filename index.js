const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3005

app.unsubscribe(express.json())
app.use('/', router)

app.listen(port, function () {
    console.log('listening to port.....!!!', port)
})