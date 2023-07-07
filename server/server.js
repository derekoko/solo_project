const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

// handle json parsing
app.use('/', express.json());

// start server:
app.listen(PORT, () => {
  console.log(`Server listing on port: ${PORT}`);
});

module.exports = app;
