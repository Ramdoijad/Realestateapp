import user from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import errorHandler from "../utils/error.js";
import jwt from 'jsonwebtoken'
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


  export const signin =async  (req,res,next)=>{

       const {email,password}=await req.body;
       try {
         const validUser= await user.findOne({email})
         if(!validUser)return next(errorHandler(404,"User Not Found"))
          const validPassword = bcryptjs.compareSync(password,validUser.password);

         if (!validPassword)return next (errorHandler(401,"Invalid Password"))

          const token = jwt.sign({id:validUser._id},process.env.JWT_SECRETE);
          const {password:pass,...rest}=validUser._doc
          res.cookie("acess_token",token,{httpOnly:true}).status(200).json(rest)
          
       } catch (error) {
        next(error)
       }


  }
  