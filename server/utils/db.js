const mongoose = require("mongoose");
// const URI = "mongodb://localhost:27017/mern_db"
const URI = process.env.MONGODB_URI;

const dbConnect = async()=>{
    try {
        await mongoose.connect(URI,{useUniFiedTopology:true},
            console.log("DB is connected")    
    )
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}
module.exports = dbConnect;