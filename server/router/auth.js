const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        if(userExist){
            const isMatch = await bcrypt.compare(password, userExist.password);

            const token = await userExist.generateAuthToken();
            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({message: "Invalid Credentials"});
            } else {
                res.json({message: "Sign In successfully"});
            }
        } else {
            res.status(400).json({message: "Invalid Credentials"});
        }
        
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;