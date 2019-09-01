const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    cuisines: [{
        cuisine: {
            type: Schema.Types.ObjectId,
            ref: 'Cuisine'
        }
    }],
    address: [{
        landmark: { type: String },
        street: { type: String, required: true },
        city: { type: String, required: true },
        geo: {
            lat: { type: Number },
            lag: { type: Number }
        }
    }],
    isOpen: {
        type: Boolean
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant