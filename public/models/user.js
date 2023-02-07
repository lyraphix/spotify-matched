const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  passwordkey: {
    type: String,
    reqiored: true
  } 
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
modeul.exports = User;

