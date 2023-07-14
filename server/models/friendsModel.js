const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const friendsSchema = new Schema(
//   {
//     requester: { type: Schema.Types.ObjectId, ref: 'Users' },
//     recipient: { type: Schema.Types.ObjectId, ref: 'Users' },
//     status: {
//       type: Number,
//       enums: [
//         0, //'add friend',
//         1, //'requested',
//         2, //'pending',
//         3, //'friends'
//       ],
//     },
//   },
//   { timestamps: true }
// );

const friendsSchema = new Schema({
  userFriends: Array,
});

module.exports = mongoose.model('Friend', friendsSchema);
