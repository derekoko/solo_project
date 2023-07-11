const express = require('express');
const router = express.Router();
const path = require('path');

// include middleware here:

router.get('/', (req, res) => {
  return res.sendFile(
    path.resolve(__dirname, '../../client/create-account.html')
  );
});

router.post('/', (req, rest) => {});

module.exports = router;
