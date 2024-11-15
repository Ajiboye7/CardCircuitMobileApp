/*const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

// Set up multer storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
  },
});

const upload = multer({ storage: storage });

// Serve the uploaded files as static
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Endpoint for image upload
app.post("/upload", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded"});
  }
  // Create the image URL
  const imageUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl }); // Return the URL of the uploaded image
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});*/
