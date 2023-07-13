const User = require('../models/userModel');

const homeController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `homeController.${method} ${type} ERROR: ${err}`,
    message: {
      err: `homeController.${method}. ERROR: Uknown error in home controller.`,
    },
  };
};

homeController.getUserData = async function (req, res, next) {
  try {
    const userID = req.cookies.ssid;
    const found = await User.findById('64af1bcfecf2ad24be003631');

    res.locals.user = found;

    return next();
  } catch (error) {
    const newErr = createErr({
      method: 'getUserData',
      type: 'GET',
      err: error,
    });
    return next(newErr);
  }
};

homeController.getUsers = async function (req, res, next) {
  try {
    const found = await User.find().limit(10);
    res.locals.users = found;
    return next();
  } catch (error) {
    const newErr = createErr({
      method: 'getUserData',
      type: 'GET',
      err: error,
    });
    return next(newErr);
  }
};

module.exports = homeController;
