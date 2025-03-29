const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = new User({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname
      },
      email,
      password
    });
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).json({
      message: 'Registration successful',
      user: {
        _id: user._id,
        email: user.email,
        fullname: user.fullname
      },
      token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = user.generateAuthToken();
    res.json({ 
      message: 'Login successful',
      user,
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.googleAuthCallback = async (req, res) => {
  try {
    const user = req.user;
    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${token}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
