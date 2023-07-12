const express = require('express');
const router = express.Router();
const path = require('path');

// insert controller here:
const signupController = require('../controllers/signupController');
const cookieController = require('../controllers/cookieController');

// add routers here:
// serves the signup page the moment they route to signup.

router.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
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

router.get('/create-account', (req, res) => {
  return res.sendFile(
    path.resolve(__dirname, '../../client/createAccount.html')
  );
});

module.exports = router;
