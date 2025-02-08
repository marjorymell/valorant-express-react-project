const Nickname = require('../models/Nickname');
const { sanitizeInput } = require('../utils/sanitizer');
const logger = require('../utils/logger');

exports.addNickname = async (req, res) => {
  try {
    const sanitizedNickname = sanitizeInput(req.body.nickname);
    
    const existingNickname = await Nickname.findOne({ userId: req.user.id });
    if (existingNickname) {
      return res.status(400).json({
        message: 'User already has a nickname'
      });
    }

    const nickname = new Nickname({
      userId: req.user.id,
      nickname: sanitizedNickname,
      playerCard: req.body.playerCard
    });

    await nickname.save();
    
    logger.info(`Nickname added for user: ${req.user.id}`);
    res.status(201).json({
      message: 'Nickname added successfully',
      nickname
    });
  } catch (error) {
    logger.error(`Error adding nickname: ${error.message}`);
    res.status(500).json({
      message: 'Server error while adding nickname'
    });
  }
};

exports.getNicknames = async (req, res) => {
  try {
    const nicknames = await Nickname.find()
      .sort({ createdAt: -1 })
      .select('nickname playerCard userId createdAt'); 
    
    res.json(nicknames);
  } catch (error) {
    logger.error(`Error fetching nicknames: ${error.message}`);
    res.status(500).json({
      message: 'Server error while fetching nicknames'
    });
  }
};

exports.deleteNickname = async (req, res) => {
  try {
    const nickname = await Nickname.findOne({ userId: req.user.id });
    
    if (!nickname) {
      return res.status(404).json({
        message: 'Nickname not found'
      });
    }

    await nickname.deleteOne();
    logger.info(`Nickname deleted for user: ${req.user.id}`);
    
    res.json({
      message: 'Nickname deleted successfully'
    });
  } catch (error) {
    logger.error(`Error deleting nickname: ${error.message}`);
    res.status(500).json({
      message: 'Server error while deleting nickname'
    });
  }
};