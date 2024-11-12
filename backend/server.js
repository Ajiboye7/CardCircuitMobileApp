const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const profileRoute = require('./routes/profileRoute')


const app = express();
const fs = require('fs');

// Ensure the 'uploads' folder exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
  console.log('Created "uploads" folder.');
}

app.use(express.json()); 

app.use('/user', userRoute );
app.use('/user/profile', profileRoute)



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DataBase & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
