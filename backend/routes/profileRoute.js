const  { createProfile, updateProfile, getProfile} = require("../controller/profileController")

const express = require("express")
const router = express.Router()
const requireAuth = require('../middleware/requiredAuth')



router.use(requireAuth)

router.get('/' , getProfile)
router.post('/', createProfile)
router.put('/:id', updateProfile)

module.exports = router