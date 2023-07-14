const Session = require('../models/sessionModel');
const User = require('../models/userModel');

const sessionController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `sessionController.${method} ${type} ERROR: ${err}`,
    message: {
      err: `sessionController.${method}. ERROR: Not Logged in.`,
    },
  };
};

sessionController.isLoggedIn = async function (req, res, next) {
  try {
    const currentssid = req.cookies.ssid;
    const found = await Session.findOne({ cookieId: currentssid }).exec();
    if (found) {
      res.locals.verified = true;
    }
    res.locals.verified = false;
  } catch (error) {
    const newErr = createErr({
      method: 'isLoggedIn',
      type: 'verification',
      err: error,
    });
    return next(newErr);
  }
};

sessionController.startSession = async function (req, res, next) {
  try {
    const { email } = req.body;
    const currentId = req.cookies.ssid;
    const found = await User.findOne({ email: email }).exec();
    const exist = await Session.findOne({ cookieId: currentId });
    if (exist) {
      return next();
    }
    if (found) {
      const sessionObj = {
        cookieId: found._id.toHexString(),
      };
      await Session.create(sessionObj);
      return next();
    }
  } catch (error) {
    const newErr = createErr({
      method: 'startSession',
      type: 'verification',
      err: error,
    });
    return next(newErr);
  }
};

module.exports = sessionController;
