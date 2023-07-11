const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const MONGO_URI =
  'mongodb+srv://dkderekkoh:hwtfdMZMfR4lM9tw@solocluster.kmnksqz.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'MatchMadeReady',
  })
  .then(() => console.log('Connected to mongoDB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    profilePicture: String,
    bio: String,
    gender: String,
    playStyle: [{ type: Schema.Types.ObjectId, ref: 'style' }],
    games: [{ type: Schema.Types.ObjectId, ref: 'game' }],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'friend' }],
    friendsList: [{ type: Schema.Types.ObjectId, ref: 'friend' }],
  },
  { timestamps: true }
);

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  // generate the salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    // hash pw using new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one.
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
// hwtfdMZMfR4lM9tw
