const medicalRecordModel =require('../models/medicalRecord')
exports.setUserDisease=async(req,res)=>{
    try {

        const {disease,description,drName,hospitalName,user,hospital}=req.body
        // const user=req.user
        // const hospital=req.hospital;
        let medicalReport=""
        if(req.file){
        medicalReport=req.file.path;
        }
 const  userdiseas = await medicalRecordModel.create({disease,description,drName,hospitalName,medicalReport,user,hospital});
        // if(!req.user)
        //   return res.status(400).json({message:"Invalid request"})
        // const user = await userModel.findOne(req.user._id);
      console.log(userdiseas)
        // if(!user)
        //   return res.status(404).json({message:"No user found"});
         return res.status(200).json({userdiseas});
      } catch (error) {
        return res.status(500).json({success:error.message})
      }


}