const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/user')
        console.log('connection successful');
    } catch(error) {
        console.log('connection failed.', error);
    }
}

module.exports = connectDB