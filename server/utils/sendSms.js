

exports.sendMessage=()=>{
   
 const accountSid = process.env. ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+12345678901', // Text your number
    from: '+19518014629', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}