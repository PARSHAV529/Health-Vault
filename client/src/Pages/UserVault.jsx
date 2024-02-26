import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddReportForm from '../components/AddReportForm';
import { Link } from 'react-router-dom';


// import Navbar from '../Hospital/Navbar'
const people = [
  {
    Disease: 'tified',
    Descrption: 'jfhghqugpqhrguhermeigveruuh',
    DrName	: 'Maheta',
    HospitalName	: 'Nd Desai',
    date:"20-8-2033",
    
    
  },
  
  

]




 

export default function HospitalDashboard() {
    const [form,setForm] =useState(false);
    const [bg,setbg]=useState(true);

    

// function handleReportBtn(){
//      setForm(true);
//      setbg(false);


// }


  return (
    <>


      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Patient Details</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Medical History. You can add new Detials, edit or delete existing
              ones.
            </p>
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
                    {people.map((person) => (
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
    </>
  )
}

// <div>
           
// <button
//   type="button"
//   className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// >
// <Link to='/filluserdetail'> Add new Report</Link>
//   Add new Report
// </button>

// </div>