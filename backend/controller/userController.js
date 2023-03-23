const validateUser = (req, res) => {
	try {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
		console.log('validate user controller called', req.body);
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