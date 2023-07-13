const friendsController = {};
const User = require('../models/userModel');
const Friend = require('../models/friendsModel');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type} ERROR: ${err}`,
    message: {
      err: `userController.${method}. ERROR: Incorrect data received.`,
    },
  };
};

friendsController.sendFriendRequest = async function (req, res, next) {
  try {
    console.log(req.body);
    return next();
    // const requestA = await Friend.findOneAndUpdate({
    //   requester:
    // })
  } catch (error) {}
};

module.exports = friendsController;
