const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

function connectToDb() {
    console.log('🔍 MongoDB URI:', process.env.DB_CONNECT); // Debug log
 
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('✅ Connected to DB'))
    .catch(err => console.error('❌ DB Connection Error:', err));
}

module.exports = connectToDb;
