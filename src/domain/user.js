const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: { type: String, enum: ['Admin', 'Author', 'User'], default: 'User' }
});

module.exports = mongoose.model('User', userSchema);