import { useState } from 'react'


import './App.css'
import  SignUp  from './Pages/Signup/SignUp'
import LogIn from './Pages/Login/Login'
import DrawerAppBar from './components/Header'
import Navigation from './components/Navigation'
import Card from './components/UserProfileCard/Card'
import AddReportForm from './components/AddReportForm'
import HospitalDashboard from './Pages/UserVault'

function App() { 
  
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <SignUp/> */}
     {/* <LogIn/> */}
     {/* <DrawerAppBar/> */}
     {/* <Navigation/> */}
    <Card/>
    </>
  )
}

export default App
