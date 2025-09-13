require('dotenv').config()
const express =require('express')
const connectToDB =require('./database/db')
const uploadImageRoutes =require('./routes/image-routes')

const app =express()
const PORT=process.env.PORT ||3000

//midlewares
app.use(express.json())

//connect to database
connectToDB()

//routes
app.use('/api/image',uploadImageRoutes)

app.listen(PORT,()=>{
    console.log(`Resumix server is running at port ${PORT}`);
})

