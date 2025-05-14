import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about_us' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/AdminDashboard' element={<AdminDashboard />} />
    </Routes>
  )
}

export default App
