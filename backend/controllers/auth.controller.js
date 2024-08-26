import user from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
  const signup = async(req,res)=>{
 
   const {username,email,password}= await req.body;

   
  const hasedPassword = bcryptjs.hashSync(password,10)
  const newUser= await new user({username,email,password:hasedPassword});

  try {
   await newUser.save();
   res.status(201).json("User Created Successfully")
  } catch (error) {
    res.status(500).json(error.errmsg)
  }
   

  }

  export default signup