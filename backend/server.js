const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')


const app = express()

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DataBase & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

