const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('User', userSchema);
