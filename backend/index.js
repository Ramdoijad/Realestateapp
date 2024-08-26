import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from  './routes/auth.route.js'
dotenv.config();
const app = express();
app.use(express.json())
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected To DB ")
}).catch((err)=>{
    console.log(err)
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server running on Port da ${PORT}`)
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
 
app.use((err,req,res,next)=>{
    const  statusCode =err.statusCode || 500;
     const message = err.message || 'internal server error'

     return      res.status(statusCode).json({
        success: false,
        statusCode,
        message 
     })


})