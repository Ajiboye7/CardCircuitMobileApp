import { createProfile, updateProfile, getprofile} from "../controller/profileController";

const express = require("express")
const router = express.Router()
const requireAuth = require('../middleware/requiredAuth')



router.use(requireAuth)

router.get('/' , getprofile)
router.post('/', createProfile)
router.put('/:id', updateProfile)

module.exports = router