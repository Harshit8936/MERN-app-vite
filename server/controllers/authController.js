const User = require('../models/User');
const bcrypt = require("bcryptjs");


// HOME LOGIC
const home = async (req,res)=>{
    try {
        res.status(200).send({message:"welcome to MERNs"})
        
    } catch (error) {
        res.status(400).send({message:error})
    }
}

// REGISTER LOGIC
const register = async (req,res,next)=>{
    try {
        const {username,email,password,phone} = req.body;
        const userExist = await User.findOne({email:req.body.email});
        if(userExist){
            return res.status(400).send({success:false,message:"Email Already Exist !"})
        }
       
        const userObj = new User({
            username:username,
            email:email,
            password:password,
            phone:phone
        })
        const newUser = await userObj.save();
        res.status(200).send({success:true,message:"Register successfully",token:await newUser.generateToken(),userId:newUser._id.toString()})
    } catch (error) {
            next(error)
        // res.status(400).send({success:false,message:error})
    }
}

// LOGIN LOGIC
const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).send({success:false,message:"Invalid credentials"})
        }
        // const isPassValid = await bcrypt.compare(password,userExist.password);
        const isPassValid = await userExist.comparePassword(password)
        if(isPassValid){
            res.status(200).send({success:true,message:"Login successfully",token:await userExist.generateToken(),userId:userExist._id.toString()})
        }else{
            res.status(401).send({success:false,message:"Invalid credentials"})
        }
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

// get logged user data
const loggedUserData = async (req,res)=>{
    try {
        const userData = req.user;
        res.status(200).send({success:true,message:"Hi user",data:userData})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}

module.exports = {home,register,login,loggedUserData}