const Order = require('../models/order')

module.exports.list = (req, res) => {
    Order.find()
        .then((orders) => {
            res.json(orders)
        })
        .then((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Order.findById(id)
        .then((order) => {
            if (order) {
                res.json(order)
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

    const order = new Order(data)
    order.save()
        .then((order) => {
            res.json(order)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body
    Order.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
        .then((order) => {
            if (order) {
                res.json(order)
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
    Order.findByIdAndDelete(id)
        .then((order) => {
            if (order) {
                res.json(order)
            }
            else {
                res.status('404').json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
