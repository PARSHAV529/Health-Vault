// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import LogIn from '../Pages/Login/Login';
import RegisterForm from '../Pages/Signup/SignUp';
import Home from '../Pages/Home';

// Define your routes
const Navigation = () => {
  return (
    <Router>
      <div>
        {/* Set up the Switch component to handle routing */}
        <Routes>
          {/* Define individual routes using the Route component */}
          <Route exact path="/" element={Home} />
          <Route path="/login" element={LogIn} />
          <Route path="/signup" element={RegisterForm} />
          {/* Handle 404 Not Found */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
