const mongoose = require('mongoose');

// Define Book schema
const bookSchema = new mongoose.Schema({
    name: String,
    category: String,
    rentPerDay: Number
});

module.exports = mongoose.model('Book', bookSchema);
