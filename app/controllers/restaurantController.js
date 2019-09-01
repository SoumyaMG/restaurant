const Restaurant = require('../models/restaurant')

module.exports.list = (req, res) => {
    Restaurant.find()
        .then((restaurants) => {
            res.json(restaurants)
        })
        .then((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Restaurant.findById(id)
        .then((restaurant) => {
            if (restaurant) {
                res.json(restaurant)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body

    const restaurant = new Restaurant(data)
    restaurant.save()
        .then((restaurant) => {
            res.json(restaurant)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Restaurant.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((restaurant) => {
            if (restaurant) {
                res.json(restaurant)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Restaurant.findByIdAndDelete(id)
        .then((restaurant) => {
            if (restaurant) {
                res.json(restaurant)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}