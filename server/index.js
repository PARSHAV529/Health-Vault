const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
//const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/user');
const hospital = require('./routes/hospital');
const userdiseas= require('./routes/userdiseas');
const { sendMessage } = require('./utils/sendSms');
const app = express()

env.config();
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_CONNECTION,{


    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected")
})
app.get('/',(req,res) =>{
    console.log("Server Is Running")
    }
)
app.post('/sendotp',(req,res)=>{

   try{
    const{number, otp}=req.body;
    console.log(req.body)
    const accountSid = process.env. ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    
    const client = require('twilio')(accountSid, authToken);
    
    
    client.messages
      .create({
        body: `your otp is ${otp}`,
        to:`${number}`, // Text your number
        from: '+19518014629', // From a valid Twilio number
      })
      .then((message) =>res.status(201).json({message}))
      .catch((error) => res.status(400).json({message:error.message}))
    }catch(error){
        return res.status(500).json({message:error.message});
    }
})
app.use('/api/v1/user', user);
app.use('/api/v1/hospital',hospital)
app.use('/api/v1/userdiseas',userdiseas);
app.listen(4000,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})