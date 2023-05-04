const mongoose = require('mongoose');
const { use } = require('../routes/users');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);