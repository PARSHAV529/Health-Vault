import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import aadhar from "../../dummy_API/aadharCard_dummy";


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
  const [aadharNumber, setAadharNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function getUserContactNumber(aadharNumber) {
    const user = aadhar.find(user => user.aadharNumber === aadharNumber);
    return user ? user.userConatctNumber : "User not found";
}
 

  
  function onSignup(e) {
    e.preventDefault()
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;
    setPh(getUserContactNumber(aadharNumber))
    
    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh,appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handelloginButton()
  };
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
          <form
            onSubmit={onSignup}
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
                    {...register(field.label.toLowerCase(), {
                      required: field.required,
                    })}
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 ${
                      field.gridCols === 2 ? "md:w-full" : ""
                    }`}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  {errors[field.label.toLowerCase()] && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center text-sm justify-center mb-5">
            <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        already have an account?
                    </a>
                    <div className="">
                        <button className="w-full hover:bg-white hover:text-blue-500 text-sm cursor-pointer px-2 py-2 tracking-wide text-blue transition-colors duration-200 transform  rounded-md  focus:outline-none ">
                            Login
                        </button>
                    </div>

            </div>

            

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-600 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
                // onClick={onSignup}

               
              >
                <span>Verify</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
          </form>
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