require('dotenv').config()
const mongoose =require('mongoose')

const connectToDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connectted Successfully!");
        
    } catch (err) {
        console.log('MongoDB connection failed: ',err)
        process.exit(1)
    }
}

module.exports = connectToDB