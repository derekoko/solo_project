const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

// handle json parsing
app.use('*', express.json());
app.use('*', express.urlencoded({ extended: true }));
app.use('*', cookieParser());

// start server:
app.listen(PORT, () => {
  console.log(`Server listing on port: ${PORT}`);
});

module.exports = app;
