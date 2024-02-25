import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import aadhar from "../../dummy_API/aadharCard_dummy";
import axios from "axios";



// appVerificationDisabledForTesting
const fields = [

  {
    label: "Aadhar Number",
    type: "number",
    placeholder: "Enter your adhar number",
    required: true,
    gridCols: 2,
  },
  
  
  // {
  //   label: "Password",
  //   type: "password",
  //   placeholder: "Enter your password",
  //   required: true,
  //   gridCols: 2,
  // },
  
  
];

export default function RegisterForm() {

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  let ip=useRef()
  let otp_gen=useRef("")
  const navigate=useNavigate()

  const [aadharNumber, setAadharNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  

  function getUserContactNumber(aadharNumber) {
    const user = aadhar.find(user => user.aadharNumber === aadharNumber);
    return user ? user.userConatctNumber : "User not found";
}
 
const otp_generate=()=>{
  const otp = Math.floor(100000 + Math.random() * 500000).toString();
  return otp;
};

async function sendOTP(formatPh,otp) {
  // Create the data object
  const data = {
    number: formatPh,
    otp: otp
  };

  try {
    // Make the POST request using axios
    const res = await axios.post("http://localhost:4000/sendotp", data);
    console.log(res.data); // Assuming you want to log the response data
    return res.data; // Return the response data if needed
  } catch (error) {
    console.error(error); // Log any errors that occur
    throw error; // Re-throw the error to handle it in the caller if needed
  }
}
  
   function onSignup(e) {
    e.preventDefault()
    setLoading(true);

    
    let num=getUserContactNumber(aadharNumber).toString()
    const formatPh = "+91" + num;
     otp_gen.current= otp_generate()
 

    setPh(formatPh)
    sendOTP(formatPh,otp_gen.current)
.then(response => {
    console.log("OTP sent successfully:", response);
    // Handle the response if needed
    setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
  })
  .catch(error => {
    console.error("Failed to send OTP:", error);
    setLoading(false);
    // Handle the error if needed
  });
    

  }
  function onOTPVerify() {
    setLoading(true);
    console.log(otp)
console.log(otp_gen.current)

    if(otp===otp_gen.current){
       setLoading(false);
       console.log("Verified")
        navigate(`/pass/${aadharNumber}`)
        

    }else{
     console.log("cancel")
          setLoading(false);


    }



    // window.confirmationResult
    //   .confirm(otp)
    //   .then(async (res) => {
    //     console.log(res);
    //     setUser(res.user);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
  }



 
  return (<>

<section className=" absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                 value={otp}
                 onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
              
    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen">
      <div className="container mx-auto text-blue-600 w-2/3 ">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-blue-400 shadow-2xl my-20 rounded-md mx-auto">
          <div className="pb-5 ">
            <h1 className="text-3xl  font-bold">verify aadhaar number</h1>
          </div>
          <div
            // onSubmit={onSignup}
            className="flex flex-col justify-start items-center w-full m-auto"
          >
            <div className="grid grid-cols-1  my-6 md:grid-cols-2 gap-3 w-full">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`text-left flex flex-col gap-2 w-full ${
                    field.gridCols === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <label className="font-semibold"  value={aadharNumber} onChange={setAadharNumber} >{field.label}</label>
                  <input
                    // {...register(field.label.toLowerCase(), {
                    //   required: field.required,
                    // })}
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 ${
                      field.gridCols === 2 ? "md:w-full" : ""
                    }`}

                    ref={ip}
                    type="number" 
                    value={aadharNumber}
                     onChange={()=>{
                      setAadharNumber(ip.current.value)
                    }}
                    placeholder={field.placeholder} 

                  />
                  
                </div>
              ))}
            </div>
          
            

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-600 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
                onClick={onSignup}

               
              >
                <span>Verify</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>













    </>
  );
}

// x