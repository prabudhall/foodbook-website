const mongoose = require('mongoose');
const mg = "mongodb+srv://pro:pro@maindb.9ij2cdi.mongodb.net/?retryWrites=true&w=majority"

const mdb = async()=>{
     await mongoose.connect(mg, { useNewUrlParser: true} ,(err, result)=>{
        if(err) console.log("--", err);
        else{
            console.log("\nConnected Established Successfully");
        }
    });
}

module.exports = mdb;
