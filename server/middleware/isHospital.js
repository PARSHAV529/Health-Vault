const hospitalModel = require('../models/hospital')
const jwt = require('jsonwebtoken')
exports.isHospital = async (req,res,next) =>{    
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            const token = req.headers.authorization.split(" ")[1];
            const decodeData = jwt.verify(token, process.env.SECRET_KEY);
            const provider = await hospitalModel.findById(decodeData.id);
            if(provider)
                req.provider = provider
            else
                res.status(400).json({message:"Invalid Request"})
            next();
        }
        }catch(error){
            return res.status(500).json({success:false,message:error.message});
    }
}