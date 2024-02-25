import { useState } from 'react'


import './App.css'
import  SignUp  from './Pages/Signup/SignUp'
import LogIn from './Pages/Login/Login'
import DrawerAppBar from './components/Header'
import Navigation from './components/Navigation'

function App() { 
  
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <SignUp/> */}
     {/* <LogIn/> */}
     {/* <DrawerAppBar/> */}
     <Navigation/>
    </>
  )
}

export default App
