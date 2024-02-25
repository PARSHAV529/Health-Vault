import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import aadhar from '../dummy_API/aadharCard_dummy';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userRequest, userSuccess } from '../redux/userReducer';

const fields = [
  
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
      gridCols: 2,
    },
    
    
  ];

  function getUser(aadharNumber) {
    const user = aadhar.find(user => user.aadharNumber === aadharNumber);
    return user ? user : "User not found";
}
export const Password = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();

    const [password, setPassword] = useState("");
    const {id}=useParams()
    console.log(id)
    console.log(password)

    let userinfo = getUser(id)
    console.log(userinfo)

    async function signup(){
        const data={
            name:userinfo.userName,
            password:password,
            phoneNumber:userinfo.userConatctNumber,
            address:userinfo.userAddress,
            date:userinfo.userDOB,
            Adharcardnumber:userinfo.aadharNumber,
            gender:userinfo.userGender
        }
        try{
           dispatch(userRequest())
            const res=await axios.post('http://localhost:4000/api/v1/user/signup',data)
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.userToken}`;
            localStorage.setItem(
              "userToken",
              JSON.stringify({ userToken: res.data.userToken })
            );
          dispatch(userSuccess(res.data))
            
           console.log(res.data)
        } catch
        (e){
            console.log(e)
        }
    }
    function onSignup(e){
        e.preventDefault();
        signup();
        setPassword("")

        navigate("/")
    }
    


  return (
    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen">
    <div className="container mx-auto text-blue-600 w-2/3 ">
      <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-blue-400 shadow-2xl my-20 rounded-md mx-auto">
        <div className="pb-5 ">
          <h1 className="text-3xl  font-bold">Create Password</h1>
        </div>
        <div
          // onSubmit={onSignup}
          className="flex flex-col justify-start items-center w-full m-auto"
        >
            <form onSubmit={onSignup}>
          <div className="grid grid-cols-1  my-6 md:grid-cols-2 gap-3 w-full">
            {fields.map((field, index) => (
              <div
                key={index}
                className={`text-left flex flex-col gap-2 w-full ${
                  field.gridCols === 2 ? "md:col-span-2" : ""
                }`}
              >
                <label className="font-semibold"  >{field.label}</label>
                <input
                  // {...register(field.label.toLowerCase(), {
                  //   required: field.required,
                  // })}
                  className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 ${
                    field.gridCols === 2 ? "md:w-full" : ""
                  }`}

                  type="password" 
                  value={password}
                   onChange={(e)=>{
                    setPassword(e.target.value)
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
              <span>Sign up</span>
              {/* <HiOutlineArrowCircleRight size={20} /> */}
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
