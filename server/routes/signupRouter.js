const express = require('express');
const router = express.Router();
const path = require('path');

// insert controller here:
const signupController = require('../controllers/signupController');
const cookieController = require('../controllers/cookieController');

// add routers here:
// serves the signup page the moment they route to signup.

router.post('/create-account', signupController.createAccount, (req, res) => {
  return res.sendStatus(200);
});

router.post(
  '/',
  signupController.signup,
  cookieController.setSSIDCookie,
  (req, res) => {
    if (!res.locals.successCreation) {
      return res.status(400).redirect('/signup');
    }
    res.cookie('ssid', res.locals.ssid, { httpOnly: true });
    return res.status(200).redirect('/signup/create-account');
  }
);

module.exports = router;
