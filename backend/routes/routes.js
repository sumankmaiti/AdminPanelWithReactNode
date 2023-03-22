const express = require('express')
const router = express.Router()
const { validateUser, insertUser } = require('../controller/userController')

router.get('/validate', validateUser)
router.get('/insert', insertUser)

module.exports = router