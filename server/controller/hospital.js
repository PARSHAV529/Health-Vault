const bcrypt = require('bcrypt')
const hospitalModel = require('../models/hospital')

const generateToken = require('../utils/generateToken');

exports.registerHospital = async(req,res) =>{
    try {
        const {name,password,phoneNumber,address,registerNumber} = req.body;
        const hospitalExists = await hospitalModel.findOne({registerNumber})
        // Checking If User Already Exist With Entered Email
        if(hospitalExists)
            return res.status(400).json({message:"User Already Exists"});
        
        // Checking if email already exists as provider Email Id
       // const isProvider = await providerModel.findOne({email});
       // if(isProvider)
         //   return res.status(400).json({message:"Try Different Email Id"})
        console.log("hello")
        const hospital = await hospitalModel.create({name,password,phoneNumber,address,registerNumber});
        console.log(hospital)
        generateToken(res,201,hospital,false)
    } catch (error) {
        return res.status(500).json({message:error})
    }
}
exports.loginHospital = async(req,res) =>{
    try {
        const {registerNumber, password} = req.body;
        const hospital = await hospitalModel.findOne({registerNumber});
        if(!hospital)
            return res.status(404).json({message:"Invalid Email or Password"});
        const passwordMatch = await bcrypt.compare(password,hospital.password)
        if(!passwordMatch)
            return res.status(400).json({message:"Invalid Email or Password"})
        generateToken(res,200,hospital,false);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}