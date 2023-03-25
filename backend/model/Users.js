const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        phone: {type: Number, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
		refId: {type: String, required:false, default: 0}
    }
)

const Users = mongoose.model('user', UserSchema)

module.exports = Users