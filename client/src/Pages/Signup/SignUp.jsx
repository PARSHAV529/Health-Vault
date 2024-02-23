import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const fields = [

  {
    label: "Aadhar Number",
    type: "number",
    placeholder: "Enter your adhar number",
    required: true,
    gridCols: 2,
  },
  
  
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    gridCols: 2,
  },
  
  
];

export default function RegisterForm({handelloginButton}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handelloginButton()
  };
  return (
    <div className="fixed top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen    ">
      <div className="container mx-auto text-blue-600 w-2/3 h-screen">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-blue-400 shadow-2xl my-20 rounded-md mx-auto">
          <div className="pb-5 ">
            <h1 className="text-3xl  font-bold">Register Form</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
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
                  <label className="font-semibold">{field.label}</label>
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
               
                // onClick={}
              >
                <span>Register</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}