const {uploadImage, deleteImage} = require('../controller/profileController')
const express = require('express');
const multer = require('multer');
const requireAuth = require('../middleware/requiredAuth')

const router = express.Router(); 



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

router.use(requireAuth)

router.post('/', upload.single('photo'), uploadImage);
router.delete('/', deleteImage);

module.exports = router;
