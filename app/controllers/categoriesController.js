const Category = require('../models/category')

module.exports.list = (req, res) => {
    Category.find()
        .then((categories) => {
            res.json(categories)
        })
        .then((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Category.findById(id)
        .then((category) => {
            if (catrgory) {
                res.json(category)
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

    const category = new Category(data)
    category.save()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Category.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((category) => {
            if (category) {
                res.json(category)
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
    Category.findByIdAndDelete(id)
        .then((category) => {
            if (category) {
                res.json(category)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}