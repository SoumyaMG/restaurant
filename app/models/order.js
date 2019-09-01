const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    orderDate: {
        type: Date,
        required: true
    },
    order_number: {
        type: Number
    },
    order_Items: [{
        foodItem: {
            type: Schema.Types.ObjectId,
            ref: 'FoodItem'
        }, quantity: {
            type: Number,
            required: true
        }, price: {
            type: Number
        }
    }]
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order