const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// import routers
const signupRouter = require('./routes/signupRouter');
const createAccountRouter = require('./routes/createAccountRouter');

// handle json parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// serve a static file to the html.
app.use(express.static(path.resolve(__dirname, '../client')));

// route to the signup page:
app.use('/signup', signupRouter);

app.use('/create-account', createAccountRouter);

// root:
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../client/login.html'));
});

// 404 handler:
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server:
app.listen(PORT, () => {
  console.log(`Server listing on port: ${PORT}`);
});

module.exports = app;
