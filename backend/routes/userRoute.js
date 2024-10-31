const {signInUser, signUpUser} = require('../controller/userController')

const express = require('express')

const router = express.Router()

router.post('/signIn', signInUser)
router.post('/signUp', signUpUser)


module.exports = router