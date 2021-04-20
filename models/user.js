const Mongoose = require('mongoose')
const Schema = Mongoose.Schema
//Passport local Mongoose
const PassportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: String,
    image: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

UserSchema.plugin(PassportLocalMongoose)

module.exports = Mongoose.model('User', UserSchema)