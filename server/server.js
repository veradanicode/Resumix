require('dotenv').config()
const express =require('express')
const connectToDB =require('./database/db')

const app =express()
const PORT=process.env.PORT ||3000

//midlewares
app.use(express.json())

//connect to database
connectToDB()

app.listen(PORT,()=>{
    console.log(`Resumix server is running at port ${PORT}`);
})

