const  { createProfile, updateProfile, getProfile} = require("../controller/profileController")

const express = require("express")
const router = express.Router()
const requi
router.post('/', createProfile)
router.put('/', updateProfile)


module.exports = router