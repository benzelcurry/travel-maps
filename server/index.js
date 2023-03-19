const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

// Connects to database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => console.log(err)
);

// Parses body
app.use(express.json());

// Pins router
app.use('/api/pins', pinRoute);

// Users router
app.use('/api/users', userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`)
});