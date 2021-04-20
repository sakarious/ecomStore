const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    image: [String],
    location: String,
    lat: Number,
    lng: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

module.exports = Mongoose.model('Post', PostSchema)