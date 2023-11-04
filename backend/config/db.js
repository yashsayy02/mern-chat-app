const mongoose = require("mongoose");

const connectDB = async() => {
    try{

        const connectToDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("mongoDB connected");
    }catch(err){
        console.log(`Error: ${err.message}`);
        process.exit();
    }
    
}

module.exports = connectDB;