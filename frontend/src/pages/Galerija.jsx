import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../Home.scss'
import './Galerija.scss'

const Galerija = () => {
  const images = Array(24).fill('/slike/slike_za_galeriju/eksterijer/IMG_4619.JPG');

  return (
    <>
        <div className="wrapper">
            <NavBar/>
            <div className='galerija'>
              <div className='galerija-start'>
                <h1>Escape to paradise</h1>
              </div>
              <div className='galerija-end'>
                <div className='gallery-grid'>
                  {images.map((img, index) => (
                    <div key={index} className='gallery-item'>
                      <img src={img} alt={`Gallery image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Footer/>
        </div>
    
    </>
  )
}

export default Galerija