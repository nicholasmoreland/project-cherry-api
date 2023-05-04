const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* Request to GET all users */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* Request to GET one user */
router.get('/:username', getUser, async (req, res) => {
    res.json(res.user);
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findOne({ username: req.params.username });

        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user'});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;