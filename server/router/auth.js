const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/connection');
const User = require('../model/userSchema');

// router.get('/', (req, res) => {
//     res.send("Hello World from auth.js")
// });

router.post('/sign-up', async (req, res) => {
    const { name, email, phone, work, password, confirmpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !confirmpassword) {
        res.status(422).json({ error: "This field can't be empty. Please fill it out" })
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(422).json({ error: "This email is already exist. Please Sign In." })
        } else {
            const user = new User({ name, email, phone, work, password, confirmpassword });

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

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/getData', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async(req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if(!name || !email || !phone || !message){
            console.log("error in Contact Form")
            return res.json({error: "plz filled the contact form"})
        }

        const userContact = await User.findOne({_id: req.userID });

        if(userContact){

            const userMessage =  await userContact.addMessages(name, email, phone, message);
            await userContact.save();

            res.status(201).json({ message: "Contact us saved in user database successfully" });
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('jwtToken', { path:'/' });
    res.status(200).send("user logout");
});

module.exports = router;