import User from "../models/userModel";
import bcrybt from "bcryptjs";
import jwt from "jsonwebtoken";

////////////////////////SignUp End point ///////////////////////////////

export const registerUser = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.send(err);
    else {
      if (user !== null && user !== undefined) {
        res.json({ message: "this email is already registerd" });
      } else {
        const newUser = new User(req.body);
        newUser.hashedPassword = bcrybt.hashSync(req.body.password, 10);
        newUser.save(err => {
          if (err) res.send(err);
          res.json({ message: "user registered successfully" });
        });
      }
    }
  });
};

////////////////////////////// Signin Endpoint ////////////////////////

export const loginUser =(req,res)=>{
    User.findOne({email: req.body.email},(err,user)=>{
        if(err) res.send(err)
        else{
            if(user===null || user===undefined){
                res.json({message:"user not registered"})
            } else {
                if (user.comaperPassword(req.body.password, user.hashedPassword)){
                    let token = jwt.sign({id: user._id}, "secret", {expiresIn:"1h"})
                    res.json({token: token})
                }else{
                    res.json({message:"Auth Fialed"})
                }
            }
        }
    })
}
/////////////////////////////// middleWare for Auth /////////////////////////////

export const checkAuth = (req,res,next)=>{
    if(req.user) next()
    else{
        res.json({message:"Auth Failed"})
    }
}