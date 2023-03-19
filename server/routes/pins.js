const router = require('express').Router();
const Pin = require('../models/Pins');

// Create a pin
router.post('/', async (req, res, next) => {
  const newPin = new Pin(req.body)
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch(err) {
    res.status(500).json(err);
  };
});

// Get all pins

module.exports = router;