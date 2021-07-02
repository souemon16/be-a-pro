const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send("Hello World from auth.js")
});

router.get('/about', (req, res) => {
    res.send("About page from auth.js")
});

router.post('/signup', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({ error: "This field can't be empty. Please fill it out" })
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                res.status(422).json({ error: "This email is already exist. Please Sign In." })
            } else {
                const user = new User({ name, email, phone, work, password, cpassword });
                user.save()
                    .then(() => {
                        res.status(201).json({ message: "Successfully created new account" });
                    })
                    .catch((error) => {
                        res.status(500).json({ error: "Failed to created your account" });
                        console.log(error);
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;