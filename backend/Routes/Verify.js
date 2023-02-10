if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/verifyJWT', async (req, res)=>{
    await jwt.verify(req.body.authToken, process.env.JWT_SECRET, (err, data)=>{
        if(err){
            return res.json({success: false});
        }
        else{
            return res.json({success: true});
        }
    })
})

module.exports = router;