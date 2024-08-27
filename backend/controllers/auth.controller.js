import user from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
  const signup = async(req,res,next)=>{
 
   const {username,email,password}= await req.body;

   
  const hasedPassword = bcryptjs.hashSync(password,10)
  const newUser= await new user({username,email,password:hasedPassword});

  try {
   await newUser.save();
   res.status(201).json("User Created Successfully")
  } catch (error) {
    next(error)
  }
   

  }

  export default signup