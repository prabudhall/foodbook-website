const express = require("express");
const router = express.Router();
const order = require('../models/Orders');

router.post('/orderData', async(req, res)=>{
    let data = req.body.order_data;
    await data.splice(0, 0, {Order_date: req.body.order_date + " - ₹" + req.body.totalPrice});

    let eId = await order.findOne({'email':req.body.email});
    console.log(eId);
    if(eId === null){
        try {
            await order.create({
                email: req.body.email,
                order_id: [data]
            }).then(()=>{
                res.json({success:true});
            });
        }
        catch(error) {
            console.log(error.message);
            res.send("Server issue", error.message);
        }
    }
    else {
        try{
            await order.findOneAndUpdate({email: req.body.email}, {$push: {order_id: data}}).then(()=>{res.json({success:true})});
        }
        catch(error){
            res.send("Server Error", error.message);
        }
    }
})

router.post("/myOrderData", async (req, res)=>{
    try {
        let myOrder = await order.findOne({"email": req.body.email});
        res.json({myOrder: myOrder});
    } catch (error) {
        res.send("Server Error", error.message);
    }
});

module.exports = router;