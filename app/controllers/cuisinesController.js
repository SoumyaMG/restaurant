const Cuisine = require('../models/cuisine')

module.exports.list = (req, res) => {
    Cuisine.find()
        .then((cuisines) => {
            res.json(cuisines)
        })
        .then((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Cuisine.findById(id)
        .then((cuisine) => {
            if (cuisine) {
                res.json(cuisine)
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

    const cuisine = new Cuisine(data)
    cuisine.save()
        .then((cuisine) => {
            res.json(cuisine)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Cuisine.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((cuisine) => {
            if (cuisine) {
                res.json(cuisine)
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
    Cuisine.findByIdAndDelete(id)
        .then((cuisine) => {
            if (cuisine) {
                res.json(cuisine)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}