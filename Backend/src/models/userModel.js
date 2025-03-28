const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    fullname:{
        firstName:{
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        },
        lastName: {
                type: String,
                required: true,
                trim: true,
                maxLength: 50
        }
    }
  
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}