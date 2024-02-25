const bcrypt = require('bcrypt')
const userModel = require('../models/user');
const generateToken = require('../utils/generateToken');



exports.registerUser = async(req,res) =>{
    try {
        const {name,password,phoneNumber,address,Adharcardnumber,date,gender} = req.body;
        const userExists = await userModel.findOne({Adharcardnumber})
        // Checking If User Already Exist With Entered Email
        if(userExists)
            return res.status(400).json({message:"User Already Exists"});
        
        // Checking if email already exists as provider Email Id
       // const isProvider = await providerModel.findOne({email});
       // if(isProvider)
         //   return res.status(400).json({message:"Try Different Email Id"})
        console.log("Email");
        const user = await userModel.create({name,password,phoneNumber,address,Adharcardnumber,date,gender});
        console.log(user);
        generateToken(res,201,user,true)
    } catch (error) {
        return res.status(500).json({message:error})
    }
}
exports.loginUser = async(req,res) =>{
    try {
        const {phoneNumber, password} = req.body;
        const user = await userModel.findOne({phoneNumber});
        if(!user)
            return res.status(404).json({message:"Invalid Email or Password"});
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch)
            return res.status(400).json({message:"Invalid Email or Password"})
        generateToken(res,200,user,true);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}