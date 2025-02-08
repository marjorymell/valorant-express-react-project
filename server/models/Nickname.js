const mongoose = require('mongoose');

const NicknameSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  nickname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  playerCard: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Nickname', NicknameSchema);