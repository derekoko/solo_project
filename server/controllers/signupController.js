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
  try {
    const currentId = req.cookies.ssid;
    const { username, profilePicture, userGame } = req.body;
    const exist = await User.findOne({ username: username });
    if (exist) {
      throw new Error('Username already exists please try another name.');
    }
    // const found = await User.findById(currentId);
    const newUser = {
      username: username,
      profilePicture: profilePicture,
      games: [userGame],
    };
    console.log(req.body);
    await User.findOneAndUpdate(
      { _id: currentId },
      {
        username: username,
        profilePicture: profilePicture,
        games: [userGame],
      },
      { new: true }
    );
    return next();
  } catch (error) {
    const newErr = createErr({
      method: 'createAccount',
      type: 'POST',
      err: error,
    });
    return next(newErr);
  }
};

module.exports = signupController;

//.findOneAndUpdate({_id: properId}, {games: newArr}, options)
//{ new: true}
