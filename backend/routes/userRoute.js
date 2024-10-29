const {signInUser, signUpUser} = require('../controller/userController')

const express = require('express')

const router = express.Router()

router.post('/sign-in', signInUser)
router.post('sign-up', signUpUser)

module.exports = router