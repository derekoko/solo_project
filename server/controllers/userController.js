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

const userController = {};

userController.verifyUser = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const found = await User.findOne({ email: email });
    if (!found) {
      res.locals.verified = false;
      return next();
    }
    await found.comparePassword(password, function (err, isMatch) {
      if (!isMatch) {
        res.locals.verified = false;
      } else {
        res.locals.verified = true;
      }
    });
    return next();
  } catch (error) {
    const newErr = createErr({
      method: 'verifyUser',
      type: 'verification',
      err: error,
    });
    return next(newErr);
  }
};

userController.signup = async function (req, res, next) {
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

userController.createAccount = async function (req, res, next) {
  try {
    const currentId = req.cookies.ssid;
    const { username, profilePicture, userGame, bio } = req.body;
    const exist = await User.findOne({ username: username });
    if (exist) {
      throw new Error('Username already exists please try another name.');
    }
    await User.findOneAndUpdate(
      { _id: currentId },
      {
        username: username,
        profilePicture: profilePicture,
        games: [userGame],
        bio: bio,
      },
      { new: true }
    );
    res.locals.accountCreated = true;
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

module.exports = userController;

//.findOneAndUpdate({_id: properId}, {games: newArr}, options)
//{ new: true}
