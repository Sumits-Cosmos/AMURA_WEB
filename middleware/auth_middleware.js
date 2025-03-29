const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const BlackListToken = require('../models/blackListToken');

module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });

    const isBlacklisted = await BlackListToken.findOne({ token });
    if (isBlacklisted) return res.status(401).json({ message: 'Unauthorized: Token blacklisted' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded._id) return res.status(401).json({ message: 'Unauthorized: Invalid token structure' });

    const user = await User.findById(decoded._id);
    if (!user) return res.status(401).json({ message: 'Unauthorized: User not found' });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};
