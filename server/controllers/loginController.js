const User = require('../models/userModel');

const loginController = {};

loginController.verifyLogin = async function () {
  const { email, password } = req.body;
  const found = await User.findOne({ email: email });
  await found.comparePassword(password, function (err, isMatch) {
    if (err) {
      res.locals.verified = false;
      return next(err);
    }
    res.locals.verified = true;
    return next();
  });
};

module.exports = loginController;
