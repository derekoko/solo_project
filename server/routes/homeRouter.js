const express = require('express');
const router = express.Router();

// insert controllers here
const homeController = require('../controllers/homeController');

router.get('/getData', homeController.getUserData, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.get('/getUsers', homeController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

module.exports = router;
