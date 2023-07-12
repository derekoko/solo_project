const User = require('../models/userModel.js');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type} ERROR: ${err}`,
    message: {
      err: `userController.${method}. ERROR: Incorrect data received.`,
    },
  };
};

const signupController = {};

signupController.signup = async function (req, res, next) {
  try {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      res.locals.successCreation = false;
      return next();
    } else {
      res.locals.successCreation = true;
      const newUser = {
        username: email,
        email: email,
        password: password,
      };
      res.locals.users = newUser;
      await User.create(newUser);
      return next();
    }
  } catch (error) {
    const newErr = createErr({
      method: 'createUser',
      type: 'POST',
      err: error,
    });
    return next(newErr);
  }
};

signupController.createAccount = async function (req, res, next) {
  const { username, profilePicture, gameList } = req.body;

  console.log(req.body);
  return next();
};

module.exports = signupController;
