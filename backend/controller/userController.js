const Users = require('../model/Users');
const UserDetails = require('../model/UserDetails')

const validateUser = async (req, res) => {
	const sendResponse = (obj) => {
		res.json(obj)
	}
	
	try {
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		let { id, password } = req.body
	
		if (id.includes("@")) {
			var existingUser = await Users.findOne({email: id})

		} else {
			try {
				existingUser = await Users.findOne({phone: id})
			}
			catch(error) {
				sendResponse({error: 'Invalid Format. Use email or phone number'})
				return
			}
		}

		if(existingUser && (password == existingUser.password)) {
			const info = await UserDetails.findOne({ _id: existingUser._id })
			const { _id, phone, email, isAdmin } = existingUser
			const { fname, lname, address } = info

			const reply = {_id, phone, email, isAdmin, fname, lname, address}
			res.json({info: [reply]})
		}
		else {
			sendResponse({error: 'Invalid Username or Password.'})
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