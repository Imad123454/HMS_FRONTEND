import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from "./components/About"
import PateintPortal from "./components/PateintPortal"
import PateintSignin from './components/PateintSignin'
import Home from "./components/Home"
import Appointment from "./components/Appointment"
import Login from "./components/Login"
import DoctorSignin from "./components/DoctorSignin"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"
import ChangePassword from "./components/ChangePassword"
import Contact from "./components/Contact"






function App() {
  

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portal" element={<PateintPortal/>}/>
      <Route path="/patientSignin" element={<PateintSignin/>}/>
      <Route path="/doctorsSignin" element={<DoctorSignin/>}/>

      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/changepassword" element={<ChangePassword/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}





    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
