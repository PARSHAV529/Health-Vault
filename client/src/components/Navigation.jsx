// Import necessary dependencies
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

// Import your components
import LogIn from '../Pages/Login/Login';
import RegisterForm from '../Pages/Signup/SignUp';
import Home from '../Pages/Home';
import DrawerAppBar from './Header';
import { Password } from './Password';
import HospitalDashboard from '../Pages/UserVault';
import UserProfile from './UserProfileCard/Card';
import HospitalSignup from '../Pages/HospitalSignup';



// Define your routes
const Navigation = () => {
  return (
    <BrowserRouter >  
     <DrawerAppBar/>
      <Routes>
        <Route path="/user/signup" element={<RegisterForm />} />
        <Route path="/hospital/signup" element={<HospitalSignup/>} />
        <Route path="/" element={<Home  />} />
        <Route path="/user/login" element={ <  LogIn/>} />
        <Route path="/pass/:id" element={ <Password/>} />
        <Route path="/hospital" element={ <UserProfile/>} />
       




      </Routes>






    </BrowserRouter>
  );
};

export default Navigation;
