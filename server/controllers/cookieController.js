const cookieController = {};
const User = require('../models/userModel');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type} ERROR: ${err}`,
    message: {
      err: `userController.${method}. ERROR: Incorrect data received.`,
    },
  };
};

cookieController.setSSIDCookie = async function (req, res, next) {
  try {
    const { email } = req.body;
    const found = await User.findOne({ email: email }).exec();
    res.locals.ssid = found._id.toHexString();
    return next();
  } catch (error) {
    const newErr = createErr({
      method: 'setSSIDCookie',
      type: 'POST',
      err: error,
    });
    return next(newErr);
  }
};

module.exports = cookieController;
