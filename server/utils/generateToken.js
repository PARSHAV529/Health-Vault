const generateToken = (res,statusCode,user,isUser) =>{
    try{
        let token = ''
        let text = ''
        if(isUser){
            token = user.generateJwtToken(); // Generating token for user
            text = 'userToken'
        }else{
            token = user.generateJwtToken(); // Generating token for provider
            text = 'hospitalToken'
        }
        console.log("hello")
        if(isUser)
        return res.status(statusCode).json({
            _id:user._id,
            name:user.name,
            phoneNumber:user?.phoneNumber,
            adharcardNumber:user?.AdharcardNumber,
            address:user?.address,
            gender:user?.gender,
            date:user?.date,
            userToken:token
        })
        return res.status(statusCode).json({
            _id:user._id,
            name:user.name,
            address:user?.address,
            phoneNumber:user?.phoneNumber,
            registerNumber:user?.registerNumber,
            hospitalToken:token
        })
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
module.exports = generateToken