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
    // console.log(`Found data: ${found.username}`);
    const {
      username,
      profilePicture,
      playStyle,
      games,
      favorites,
      friendsList,
    } = found;
    const user = {
      username,
      profilePicture,
      playStyle,
      games,
      favorites,
      friendsList,
    };
    res.locals.user = found;
    // console.log(`The user: ${user}`);
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
