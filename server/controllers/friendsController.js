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
    const { requestee_id, requester_id } = req.body;
    const requestee = await User.findById(requestee_id);
    const requester = await User.findById(requester_id);
    console.log(requester);
    if (!requester.friendsList) {
      console.log('we in the not existing friends list.');
      const created = await Friend.create({
        userFriends: [requestee.username],
      });
      await User.findOneAndUpdate(
        { _id: created._id },
        { friendsList: friendId },
        { new: true }
      );
    } else {
      console.log('in here');
      const updated = await User.findOneAndUpdate(
        { _id: requester._id },
        { $push: { friendsList: friendId } },
        { new: true }
      );
      console.log(updated);
      return next();
    }

    await User.findOneAndUpdate(
      { _id: requester._id },
      {
        friendsList: [{}],
      }
    );

    return next();
    // const requestA = await Friend.findOneAndUpdate({
    //   requester:
    // })
  } catch (error) {}
};

module.exports = friendsController;
