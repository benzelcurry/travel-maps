const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`)
});