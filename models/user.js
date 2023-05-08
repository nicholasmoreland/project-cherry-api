const mongoose = require('mongoose');
const { use } = require('../routes/users');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    auth: {
        type: Boolean,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);