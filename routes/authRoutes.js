const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const passport = require('passport');

const router = express.Router();

// JWT Authentication Routes
router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('firstname').notEmpty(),
    body('lastname').notEmpty()
  ],
  authController.registerUser
);

router.post('/login', authController.loginUser);

// Google OAuth Routes
router.get('/google', (req, res, next) => {
  console.log("Google Auth Route Hit");
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  authController.googleAuthCallback
);

module.exports = router;
