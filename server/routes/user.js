const express = require('express');
const router = express.Router();

const userSchema = require('../models/user');

// Create Users
router.route('/createUsers').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      // console.log(data)
      res.json(data)
    }
  })
});

// Display Users
router.route('/').get((req, res, next) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
});

module.exports = router;