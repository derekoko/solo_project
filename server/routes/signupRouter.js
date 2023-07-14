const express = require('express');
const router = express.Router();

// insert controller here:
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

// add routers here:
// serves the signup page the moment they route to signup.

router.post('/create-account', userController.createAccount, (req, res) => {
  if (res.locals.accountCreated === true) {
    return res.status(200).redirect('/home');
  } else {
    return res.status(404);
  }
});

router.post(
  '/',
  userController.signup,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    if (!res.locals.successCreation) {
      return res.status(400).redirect('/signup');
    }
    res.cookie('ssid', res.locals.ssid, { httpOnly: true });
    return res.status(200).redirect('/signup/create-account');
  }
);

module.exports = router;
