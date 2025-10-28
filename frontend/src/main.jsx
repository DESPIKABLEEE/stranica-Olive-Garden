import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Home from './Home.jsx'
import Calendar from './pages/Calendar.jsx'
import Contact from './pages/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    {/* <Calendar /> */}
    <Contact />
  </StrictMode>,
)
