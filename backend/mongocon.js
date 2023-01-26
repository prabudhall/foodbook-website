const mongoose = require('mongoose');
const mg = "mongodb+srv://pro:pro@maindb.9ij2cdi.mongodb.net/db?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);

const mdb = async()=>{
     await mongoose.connect(mg, { useNewUrlParser: true} ,async(err, result)=>{
        if(err) console.log("--", err);
        else{
            console.log("\nConnected Established Successfully");
            const fetched = await mongoose.connection.db.collection('fdi');
            fetched.find({}).toArray(function(err, got){
                if(err) {
                    console.log('--', err);
                }
                else {
                    // console.log(got);
                }
            });
        }
    });
}

module.exports = mdb;
