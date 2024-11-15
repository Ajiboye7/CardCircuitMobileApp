const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const userRoute = require('./routes/userRoute');
const profileRoute = require('./routes/profileRoute');
const fs = require('fs');

const app = express();

// Ensure the 'uploads' folder exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
  console.log('Created "uploads" folder.');
}

// Middleware for JSON parsing
app.use(express.json());

// Serve the uploaded files as static
app.use('/uploads', express.static('uploads'));

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const imageUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl }); // Return the URL of the uploaded image
});

// Routes
app.use('/user', userRoute);
app.use('/user/profile', profileRoute);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to Database & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
