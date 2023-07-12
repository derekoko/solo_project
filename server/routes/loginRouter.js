const express = require('express');
const router = express.Router();

// insert controllers:
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

// add routers:
router.post(
  '/',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    if (res.locals.verified === true) {
      res.cookie('ssid', res.locals.ssid, { httpOnly: true });
      return res.status(200).redirect('/home');
    }
    return res.status(400).redirect('/signup');
  }
);

module.exports = router;
