const express = require('express');
const router = express.Router();
const path = require('path');

// insert controller here:
const signupController = require('../controllers/signupController');

// add routers here:
// serves the signup page the moment they route to signup.

router.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
});

router.post('/', signupController.signup, (req, res) => {
  if (!res.locals.successCreation) {
    return res.status(400).redirect('/signup');
  }
  return res.status(200).redirect('/create-account');
});

module.exports = router;
