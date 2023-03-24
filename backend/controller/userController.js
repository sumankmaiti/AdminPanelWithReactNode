const Users = require('../model/Users');

const validateUser = async (req, res) => {
	try {
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		let { id, password } = req.body

		if (id.includes("@")) {
			var existingUser = await Users.find({email: id})
		} else {
			existingUser = await Users.find({phone: id})
		}

		console.log('validate user controller called', id, password, existingUser);

		res.json('Hello')
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