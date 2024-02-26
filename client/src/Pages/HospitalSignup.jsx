import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { hospitalRequest, hospitalSuccess } from '../redux/hospitalReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fields = [

  {
    label: "name",
    type: "string",
    placeholder: "Enter hospital name",
    required: true,
    gridCols: 2,
  },
  
  
  {
    label: "phoneNumber",
    type: "number",
    placeholder: "Enter hospital phoneNumber",
    required: true,
    gridCols: 2,
  },
  {
    label: "address",
    type: "string",
    placeholder: "Enter  address",
    required: true,
    gridCols: 2,
  },
  {
    label: "email",
    type: "string",
    placeholder: "Enter Hospital email",
    required: true,
    gridCols: 2,
  },
  {
    label: "RegisterNumber",
    type: "String",
    placeholder: "Enter  User Report",
    required: true,
    gridCols: 2,
  },
  {
    label: "password",
    type: "string",
    placeholder: "Enter Password",
    required: true,
    gridCols: 2,
  },
  
  
];


export default function HospitalSignup() {

  const dispatch=useDispatch()
  const navigate=useNavigate()
 const Record={
   name:'',
   phoneNumber:'',
   address	: '',
   email : '',
   registerNumber: '',
   password: '',
 }

//  const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     handelloginButton()
//   };

 const [addRecord,setAddRecord] = useState(Record)

 console.log(addRecord.name)
 async function hospitalsignup(){
  
  try{
     dispatch(hospitalRequest())
      const res=await axios.post('http://localhost:4000/api/v1/hospital/signup',addRecord)
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.hospitalToken}`;
      localStorage.setItem(
        "hospitalToken",
        JSON.stringify({ hospitalToken: res.data.hospitalToken })
      );
    dispatch(hospitalSuccess(res.data))
      
     console.log(res.data)
  } catch
  (e){
      console.log(e)
  }
}

 function handleSubmit(e){
  e.preventDefault();
  hospitalsignup();
  navigate("/")
 
    
 }




  return (
    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 	 w-screen h-screen">
      <div className="container mx-auto text-blue-600 w-2/3">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-blue-400 shadow-2xl my-20 rounded-md mx-auto">
          <div className="pb-5 ">
            <h1 className="text-3xl  font-bold">Hospital Registration</h1>
          </div>
          <form
             onSubmit={handleSubmit}
            className="flex flex-col justify-start items-center w-full m-auto"
          >
            <div className="grid grid-cols-1  my-6 md:grid-cols-2 gap-3 w-full">
            <div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold">Hospital Name </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    placeholder="Enter Hospital Name"
                    value={addRecord.name}
                    required
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, name: e.target.value }));
                      }}
                    
                  />
                  
                </div>
                <div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold">PhoneNumber</label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="number"
                    required
                    placeholder="Enter PhoneNumber"
                    value={addRecord.phoneNumber}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, phoneNumber: e.target.value }));
                      }}
                    
                  />
                  
                </div>
                <div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold"> Address</label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="Enter Address"
                    value={addRecord.address}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, address: e.target.value }));
                      }}
                    
                  />
                  
                </div><div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold"> Email </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="email"
                    required
                    placeholder="enter Hospital Name"
                    value={addRecord.email}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, email: e.target.value }));
                      }}
                    
                  />
                  <label className="font-semibold"> Hospital Register Number  </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="Enter hospital register number "
                    value={addRecord.registerNumber}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, registerNumber: e.target.value }));
                      }}
                    
                  />
                  <label className="font-semibold"> Password </label>
                  <input
                    required
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="password"
                    placeholder="Enter Password"
                    value={addRecord.password}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, password: e.target.value }));
                      }}
                    
                  />
                  
                </div>
                
             
            </div>
           

            

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-600 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
               
              
              >
                <span>Add Record</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
