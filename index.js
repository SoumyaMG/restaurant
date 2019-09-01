const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const path = require('path')
const app = express()
const port = process.env.PORT || 3005

app.use(express.static(path.join(__dirname, "client/build")))
app.unsubscribe(express.json())
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})
app.use('/', router)

app.listen(port, function () {
    console.log('listening to port.....!!!', port)
})