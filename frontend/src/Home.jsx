// rafce !!!
import React from 'react'
import './Home.scss'
import Carousel from './pages/carousel.jsx'// zasto trazi malo c
import './pages/embla.scss'
import { LetterCircleP, WifiHigh, Snowflake, PawPrint, TelevisionSimple, Fire, SwimmingPool, Clock, Check, Bed, WashingMachine } from "@phosphor-icons/react";
const OPTIONS = { loop: true }
const SLIDES = [
  '/slike/slike_za_galeriju/eksterijer/IMG_4619.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4628.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4648.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4652.JPG',
  '/slike/slike_za_galeriju/eksterijer/IMG_4654.JPG'
]

const Home = () => {
  return (
    <>
        <div className='wrapper'>
            <div className="nav-bar">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Galerija</a></li>
                    <li><a href="">Kontakt</a></li>
                </ul>
            </div>
            <div className="hero">
                <h1>Olive garden</h1>
            </div>
            <div className="about-us">
                <h1>About us</h1>
                <div className="about-us-wrapper">
                    <div className="about-image">
                        
                    </div>
                    <div className="about-text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quisquam eum sunt voluptates officia! Dicta officiis ab iure illo consequuntur ipsa? Porro nostrum ut est provident. Voluptates culpa maiores assumenda commodi. Reiciendis perferendis laboriosam similique repellat nihil, explicabo eaque minima magnam <br />eligendi modi tempora maiores doloribus nesciunt rerum ratione porro ullam id odit corrupti voluptates deserunt possimus quasi cum. <br /><br /> Quis quisquam cumque nemo hic cum obcaecati alias, ipsam fuga dolorem aliquam, rerum, sunt commodi libero cupiditate iure minima id quas?
                        </p>
                    </div>
                </div>

            </div>
            <div className="carousel-pages">
                <Carousel slides={SLIDES} options={OPTIONS} />
            </div>
            <div className='content'>
                <div className='content-naslov'>
                    <h3>Sadržaj</h3>
                </div>
                <div className='content-list'>
                    <ul>
                    <li><LetterCircleP size={24} /> Parkiralište</li>
                    <li><WifiHigh size={24} /> WiFi</li>
                    <li><Snowflake size={24} /> Klima-uređaj</li>
                    <li><PawPrint size={24} /> Dozvoljeni ljubimci</li>
                    <li><TelevisionSimple size={24} /> TV ravnog ekrana</li>
                    <li><Fire size={24} /> Roštilj</li>
                    <li><SwimmingPool size={24} /> Bazen</li>
                    <li><Clock size={24} /> Check in : X</li>
                    <li><Clock size={24} /> Check out : X</li>
                    <li><Check size={24} /> Terasa</li>
                    <li><Bed size={24} /> 2 kreveta</li>
                    <li><WashingMachine size={24} /> Mašina za rublje i suđe</li>
                </ul>
                </div>
                
                
            </div>

            <div className='jhin'>
                <div className="first">
                    <div className='one'>
                        {/* <img src="/slike/slike_za_galeriju/interijet/IMG_4595.JPG" alt="img-first" height={'450px'} width={'450px'} /> */}
                    </div>
                    <div className='two'>
                        {/* <img src="/slike/slike_za_galeriju/interijet/IMG_4604.JPG" alt="img-first" height={'450px'} width={'450px'} /> */}
                    </div>
                </div>
                
                <div className='second'>
                    <div className='three'><h3>A Sanctuary of calm</h3></div>
                    <div className='four'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, porro ut perferendis tempora odit tenetur officiis. Ipsam at nihil esse, maxime praesentium provident, quae magni doloribus, repudiandae fuga nam quibusdam deleniti rerum ea laboriosam dolor quam distinctio placeat id dolore?</p></div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Home