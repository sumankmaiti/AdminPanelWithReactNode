const Users = require('../model/Users');
const UserDetails = require('../model/UserDetails')

const validateUser = async (req, res) => {
	try {
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		let { id, password } = req.body

		if (id.includes("@")) {
			var existingUser = await Users.findOne({email: id})

		} else {
			existingUser = await Users.findOne({phone: id})
		}

		if(password == existingUser.password) {
			const userList = await UserDetails.find({})
			// const { _id, phone, email, isAdmin } = existingUser
			// const { fname, lname, address } = info

			// const reply = {_id, phone, email, isAdmin, fname, lname, address}
			res.json({userList})

		}
		else {
			res.json('Wrong Password.')
		}

	} catch (error) {
		console.log('validate user controller ', error);
	}
}

const insertUser = async (req, res) => {
	try {
		console.log('insert user controller called');
	} catch (error) {
		console.log('insert user controller', error);
	}
}

module.exports = { validateUser, insertUser }