const mongoose = require('mongoose')
// const Users = require('./Users')

const userDetailsSchema = mongoose.Schema(
    {
        // _id: {type: mongoose.Schema.Types.ObjectId, ref: Users},
        fname: {type: String, required: true},
        lname: {type: String, required: true},
        address: {type: String, required: false}
    }
)

const UserDetails = mongoose.model('userDetails', userDetailsSchema)

module.exports = UserDetails