const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true }
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email']
  },
  password: { 
    type: String, 
    required: true,
    select: false
  }
}, { timestamps: true });

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    // Skip if already hashed
    if (this.password.startsWith('$2b$')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT
userSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

module.exports = mongoose.model('User', userSchema);