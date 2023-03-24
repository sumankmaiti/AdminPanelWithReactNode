
const Users = require('./model/Users')
const UserDetails = require('./model/UserDetails')

const Admin = require('./data/Admin')
const AdminDetails = require('./data/AdminDetails')

const connectDB = require('./connect/connectDB')

connectDB()

const importData = async () => {
    try{
        const userResponse = await Users(Admin).save()

		var userDetails = new UserDetails(AdminDetails)
		userDetails._id = userResponse._id
        const userDetailsResponse = await userDetails.save()

        console.log('success.', userResponse, userDetailsResponse);
    } catch(error) {
        console.log('error occured.', error);
    }
}

importData()

// UserDetails.findById('640e1af4396a51cbf16e33ae').then((res) => console.log(res)).catch((err) => console.log(err))