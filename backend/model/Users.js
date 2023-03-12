const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        phone: {type: Number, required: true, unique: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false}
    }
)

const Users = mongoose.model('user', UserSchema)

module.exports = Users