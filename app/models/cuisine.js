const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cuisineSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number
    }
})

const Cuisine = mongoose.model('Cuisine', cuisineSchema)

module.exports = Cuisine