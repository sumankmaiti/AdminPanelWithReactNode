const Users = require('../model/Users');
const UserDetails = require('../model/UserDetails')

const validateUser = async (req, res) => {
	const sendResponse = (obj) => {
		res.json(obj)
	}
	
	try {
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		let { userid, password } = req.body
		console.log(userid, password);
	
		if (userid.includes("@")) {
			var existingUser = await Users.findOne({email: userid})

		} else {
			try {
				existingUser = await Users.findOne({phone: userid})
			}
			catch(error) {
				sendResponse({error: 'Invalid Format. Use email or phone number'})
				return
			}
		}

		if(existingUser && (password == existingUser.password)) {
			const allUsers = await UserDetails.find({})
			console.log(allUsers);
			res.json({info: allUsers})
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