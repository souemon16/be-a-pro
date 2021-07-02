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

router.post('/sign-up', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({ error: "This field can't be empty. Please fill it out" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(422).json({ error: "This email is already exist. Please Sign In." })
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            
            const registerUser = await user.save();
            if (registerUser) {
                res.status(201).json({ message: "Successfully created new account" });
            } else {
                res.status(500).json({ error: "Failed to created your account" });
            }
        }
    } catch (error) {
        console.log(error);
    }
});

router.post('/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
        res.status(422).json({ error: "This field can't be empty. Please fill it out" })
        }
        const userExist = await User.findOne({ email: email });
        if(!userExist){
            res.status(400).json({message: "No user found."});
        } else {
            res.json({message: "user find successfully"});
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;