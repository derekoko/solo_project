const express = require('express');
const router = express.Router();

// insert controllers here
const friendsController = require('../controllers/friendsController');

router.post('/', friendsController.sendFriendRequest, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
