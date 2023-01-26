const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const {body, validationResult} = require('express-validator');

router.post("/createuser", 
body("name", "Small").isLength({min: 3}),
body('email', "not email").isEmail(),
body("password", "Small").isLength({min: 5}),
async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,     //"Abc",
            location: req.body.location,     //"Delhi",
            email: req.body.email,       //"abc@gmail.com",
            password: req.body.password     //"123456"
        }).then(res.json({success: true}))
         
    } catch (error) {
        console.log(error);
        console.log();
        res.json({success: false});
    }
});

router.post("/loginuser", 
body('email', "not email").isEmail(),
body("password", "Small").isLength({min: 5}),
async(req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        var founduser = await User.findOne({
            email: req.body.email
        })
        if(!founduser) {
            return res.status(400).json({ errors: "Invalid Email id" });
        }
        if(req.body.password != founduser.password) {
            return res.status(400).json({ errors: "Invalid password" });
        }
        return res.json({success: true});
         
    } catch (error) {
        console.log(error);
        console.log();
        res.json({success: false});
    }
});

module.exports = router;