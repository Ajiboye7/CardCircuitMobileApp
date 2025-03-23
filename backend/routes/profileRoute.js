const  { createProfile, updateProfile, getProfile} = require("../controller/profileController")

const express = require("express")
const router = express.Router()
const requireAuth = require('../middleware/requiredAuth')






module.exports = router