import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
dotenv.config();
const app = express();
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
