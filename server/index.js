const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
//const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/user');
const hospital = require('./routes/hospital');
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
app.use('/api/v1/user', user);
app.use('/api/v1/hospital',hospital)
app.listen(4000,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})