const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/restaurant', { useNewUrlParser: true })
    .then(() => {
        console.log('connection to database established...!!')
    })
    .catch((err) => {
        console.log('error connecting to db', err)
    })

module.exports = mongoose