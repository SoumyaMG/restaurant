const FoodItem = require('../models/foodItem')

module.exports.list = (req, res) => {
    FoodItem.find()
        .then((foodItems) => {
            res.json(foodItems)
        })
        .then((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    FoodItem.findById(id)
        .then((foodItem) => {
            if (foodItem) {
                res.json(foodItem)
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

    const foodItem = new FoodItem(data)
    foodItem.save()
        .then((foodItem) => {
            res.json(foodItem)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    FoodItem.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((foodItem) => {
            if (foodItem) {
                res.json(foodItem)
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
    FoodItem.findByIdAndDelete(id)
        .then((foodItem) => {
            if (foodItem) {
                res.json(foodItem)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}