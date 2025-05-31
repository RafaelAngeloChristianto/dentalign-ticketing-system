import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CustStaffDashboard from './pages/CustStaffDashboard'
import OTPVerification from './pages/OTPVerification'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about_us' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/tickets' element={<CustStaffDashboard />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/verify-email' element={<OTPVerification/>}/>
    </Routes>
  )
}

export default App
