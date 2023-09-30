const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

dotenv.config({path: './config.env'});

const DB = process.env.MONGODB_URL || 'mongodb://localhost:27017/Assignment';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    
    
    const app = require('./app'); 
    const PORT = process.env.RUNNING_PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });



