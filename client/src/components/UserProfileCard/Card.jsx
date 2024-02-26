import React, { useState } from 'react';
import aadhar from '../../dummy_API/aadharCard_dummy';
// import AddReportForm from '../components/AddReportForm';
import AddReportForm from '../AddReportForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const people = [
  {
    
    Disease: 'tified',
    Descrption: 'jfhghqugpqhrguhermeigveruuh',
    DrName	: 'Maheta',
    HospitalName	: 'Nd Desai',
    date:"20-8-2033",
    
    
  },
  {
    
    Disease: 'tified',
    Descrption: 'jfhghqugpqhrguhermeigveruuh',
    DrName	: 'Maheta',
    HospitalName	: 'Nd Desai',
    date:"20-8-2033",
    
    
  },
  {
    
    Disease: 'tified',
    Descrption: 'jfhghqugpqhrguhermeigveruuh',
    DrName	: 'Maheta',
    HospitalName	: 'Nd Desai',
    date:"20-8-2033",
    
    
  },
  
  

]

const UserProfile = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const[userid,setuserid]=useState('');
  const [form,setForm] =useState(false);
  const [bg,setbg]=useState(true);
  const navigate=useNavigate()
  

function handleReportBtn(){
  //  setForm(true);
  //  setbg(false);]
  navigate(`/filluserdetail/ ${userid}`)
}

  const handleAadharSearch = async(e) => {
  //  / = aadhar.find((res.data.user) => res.data.user.aadharNumber === aadharNumber);
 e.preventDefault();

    try{
      
       const res=await axios.post('http://localhost:4000/api/v1/user/searchbyadhar',
       {
        Adharcardnumber:aadharNumber
       })

      console.log(res.data);
      setuserid(res.data.user._id);
     // console.log(res.data.res.data.user)
        const data={
      name:res.data.user.name,
      phoneNumber:res.data.user.phoneNumber,
      address:res.data.user.address,
      date:res.data.user.date,
      Adharcardnumber:res.data.user.Adharcardnumber,
      gender:res.data.user.gender,
     
  }
  
    
      setUserDetails(data);
}
    catch(e){
      alert("email not found please register in app")
      setUserDetails(null);
       console.log(e)
   }

  //   const data={
  //     name:res.data.user.userName,
  //     phoneNumber:res.data.user.userConatctNumber,
  //     address:res.data.user.userAddress,
  //     date:res.data.user.userDOB,
  //     Adharcardnumber:res.data.user.aadharNumber,
  //     gender:res.data.user.userGender,
  //     medicalRecord:people
  // }

  //   if (res.data.user) {
  //     setUserDetails(data);
  //     console.log(data)
  //   } else {
  //     setUserDetails(null);
  //   }
  };

  return (
    <>
    <div className="bg-white p-6 rounded-md shadow-md border-gray-300 ">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <form  onSubmit={handleAadharSearch}>
      {/* Input for Aadhar card number */}
      <div className="mb-4">
      
        <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">
          Input Aadhar Card Number:
        </label>
        <input
          type="text"
          id="aadharNumber"
          name="aadharNumber"
          required
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
        />
      </div>

      {/* Button to search */}
      <button
       type='submit'
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
      </form>
      {/* User details */}
      {userDetails && (
        <div className="mt-4 border border-3 border-gray-300 rounded-md w-full text-center">
          <h3 className="text-xl font-semibold mb-2">User Details:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Name:</p>
              <p>{userDetails.name}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Aadhar Number:</p>
              <p>{userDetails.Adharcardnumber}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Date of Birth:</p>
              <p>{userDetails.date}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Contact Number:</p>
              <p>{userDetails.phoneNumber}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Gender:</p>
              <p>{userDetails.gender}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2 col-span-1">
              <p className="font-semibold">Address:</p>
              <p>{userDetails.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>



    


      {userDetails && (
    <div>

   



    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Patient Details</h2>
          <p className="mt-1 text-sm text-gray-700">
            This is a list of all Medical History. You can add new Detials, edit or delete existing
            ones.
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleReportBtn}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add new Report
          </button>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span>Disease</span>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Descrption
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Dr.Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
Date                      </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Hospital Name
                    </th>
                    <th scope="col" className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {userDetails && userDetails.medicalRecord && userDetails.medicalRecord.map((person) => (
                    <tr key={person.Disease}>
                      <td className="whitespace-nowrap px-4 py-4">
                        <div className="flex items-center">
                          {/* <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={person.image}
                              alt=""
                            />
                          </div> */}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.Disease}</div>
                            {/* <div className="text-sm text-gray-700">{person.email}</div> */}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap ">
                        <div className="text-sm text-gray-900 ">{person.Descrption}</div>
                        
                      </td>
                      <td><div className="text-sm text-gray-700">{person.DrName}</div></td>
                      <td className="whitespace-nowrap px-4 ">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {person.date}
                        </span>
                      </td>
                      <td className="whitespace-nowrap  text-sm text-gray-700">
                        {person.HospitalName}
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
    )}  
    </>
  );
};

export default UserProfile;