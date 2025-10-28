import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss'
import Home from './Home.jsx'
import Calendar from './pages/Calendar.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        {/* <Route path="/kalendar" element={<Calendar />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
