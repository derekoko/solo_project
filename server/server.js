const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// import routers
const signupRouter = require('./routes/signupRouter');
const loginRouter = require('./routes/loginRouter');
const sessionController = require('./controllers/sessionController');
const homeRouter = require('./routes/homeRouter');

// handle json parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// serve a static file to the html.
app.use(express.static(path.resolve(__dirname, '../client')));

// route to the signup page:
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/home', homeRouter);
// if they are verified or not we will send the response values of true or false to the front page.
app.use('/api', sessionController.isLoggedIn, (req, res) => {
  if (res.locals.ssid) {
    return res.status(200).redirect('/home');
  }
  return res.sendStatus(400);
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
