const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodItemSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    isVeg: {
        type: Boolean
    },
    cuisine: {
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    }
})

const FoodItem = mongoose.model('FoodItem', foodItemSchema)

module.exports = FoodItem