import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './sections/Layout'
import Home from './sections/Home'
import NoPage from './sections/NoPage'
import AddStray from './sections/AddStray'
import AdoptStray from './sections/AdoptStray'
import StrayDetailSection from './sections/StrayDetailSection'
import VolunteerTreatmentSection from './sections/VolunteerTreatmentSection'
import FindVeterinaryDoctorSection from './sections/FindVeterinaryDoctorSection'
import AboutUsSection from './sections/AboutUsSection'
import ContactUsSection from './sections/ContactUsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />


          </Route>
          <Route path="add-stray" element={<AddStray />} />
          <Route path="adopt-stray" element={<AdoptStray />} />
          <Route path="stray/:id" element={<StrayDetailSection />} />
          <Route path="volunteer-treatment" element={<VolunteerTreatmentSection />} />
          <Route path="find-vet" element={<FindVeterinaryDoctorSection />} />
          <Route path="about" element={<AboutUsSection />} />
          <Route path="contact" element={<ContactUsSection />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
