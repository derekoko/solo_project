const express = require('express');
const router = express.Router();
const path = require('path');

// insert controller here:

// add your routers here:
router.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../../client/signup.html'));
});
// router.post('/create-account', (res, req) => {

// })
// router.get('/', exampleController.controller, (req, rest) => {return res.status(200).json()})

module.exports = router;
