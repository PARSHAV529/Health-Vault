import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { userDetailRequest, userDetailSuccess } from '../redux/userDetailReducer';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { jwtDecode }from 'jwt-decode'

// const fields = [

//   {
//     label: "Disease",
//     type: "string",
//     required
//     placeholder: "Enter Patient Disease",
//     required: true,
//     gridCols: 2,
//   },
  
  
//   {
//     label: "Descrption",
//     type: "string",
//     required
//     placeholder: "Enter  Descrption",
//     required: true,
//     gridCols: 2,
//   },
//   {
//     label: "Dr.Name",
//     type: "string",
//     required
//     placeholder: "Enter  Dr.Name",
//     required: true,
//     gridCols: 2,
//   },
//   {
//     label: "Hospital Name",
//     type: "string",
//     required
//     placeholder: "Enter HospitalName",
//     required: true,
//     gridCols: 2,
//   },
//   {
//     label: "Report",
//     type: "file",
//     required
//     placeholder: "Enter  User Report",
//     required: true,
//     gridCols: 2,
//   },
  
  
// ];


export default function AddReportForm() {
  const navigate=useNavigate()
  const userid =useParams();
  const storedValue = localStorage.getItem('hospitalToken');
  console.log(storedValue);
  const decodedToken = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGI1NzkzZDk5MWM0NTVmNjc2NjJkNyIsImlhdCI6MTcwODg3MzY2NCwiZXhwIjoxNzA5MzA1NjY0fQ.NmWqbY6bLojEWxa8OAJ5jV-dCNmQCAlc_KNcdyc3OOc");
  console.log(decodedToken.id);
  console.log(userid.id);
  const dispatch=useDispatch()
 const Record={
    Disease:'',
    Description:'',
    DrName	: '',
    HospitalName : '',
 }
 const[Medicalreport,setMedicalReport] =useState("")

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




 async function addtoDB(){

try{
    const form=new FormData()  
    form.append("disease", addRecord.Disease);
      form.append("description", addRecord.Description);
      form.append("drName", addRecord.DrName);
      form.append("hospitalName", addRecord.HospitalName);
      if (Medicalreport.length > 0)
        form.append("medicalReport", Medicalreport[0])
        form.append("user", userid.id.toString());
        form.append("hospital",decodedToken.id.toString());

   dispatch(userDetailRequest())
    const res=await axios.post('http://localhost:4000/api/v1/userdiseas/setuserdisease',form)
   
  dispatch(userDetailSuccess(res.data))
    
   console.log(res.data)
} catch
(e){
    console.log(e)
}

 }
 function handleSubmit(e)
 {
      e.preventDefault();
      addtoDB();
      navigate('/hospital')
      console.log(addRecord)

 }




  return (
    <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 	 w-screen h-screen">
      <div className="container mx-auto text-blue-600 w-2/3">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-blue-400 shadow-2xl my-20 rounded-md mx-auto">
          <div className="pb-5 ">
            <h1 className="text-3xl  font-bold">Add User-information</h1>
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
                  <label className="font-semibold"> Dieses </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="enter"
                    value={addRecord.Disease}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, Disease: e.target.value }));
                      }}
                    
                  />
                  
                </div>
                <div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold"> Descrption </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="enter Descrption"
                    value={addRecord.Description}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, Description: e.target.value }));
                      }}
                    
                  />
                  
                </div>
                <div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold"> Dr.Name </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="enter Dr.Name"
                    value={addRecord.DrName}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, DrName: e.target.value }));
                      }}
                    
                  />
                  
                </div><div
                  
                  className={`text-left flex flex-col gap-2 w-full md:col-span-2
                    
                  }`}
                >
                  <label className="font-semibold"> HospitalName </label>
                  <input
                   
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="string"
                    required
                    placeholder="enter Hospital Name"
                    value={addRecord.HospitalName}
                    onChange={(e) => {
                        setAddRecord(prev => ({ ...prev, HospitalName: e.target.value }));
                      }}
                  />
                  <label className="font-semibold">Medicalreport</label>
                  <input
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-blue-500 `}
                    type="file"
                    required
                    name="medicalReport"
                    placeholder="Medical Report"
                   
                    onChange={(e) => {
                        setMedicalReport(e.target.files);
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
