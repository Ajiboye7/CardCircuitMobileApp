const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const userRoute = require('./routes/userRoute');
const profileRoute = require('./routes/profileRoute')
const uploadImageRoute = require('./routes/uploadImageRoute')


const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/user', userRoute );
app.use('/user/profile', profileRoute)
app.use('/user/upload', uploadImageRoute)



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DataBase & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
